import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import { prisma } from "@/lib/prisma";

export default async function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  if (req.method === "POST") {
    try {
      let data = req.body;

      const [dbResult, emailResult] = await Promise.all([
        prisma.contact.create({
          data: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            createdAt: new Date(),
          },
        }),
        transporter.sendMail({
          from: process.env.NEXT_PUBLIC_MAIL_USER,
          to: data.email,
          subject: "以下の内容でお問い合わせを受け付けました",
          text: `
        名前
        ${data.name}
        
        メールアドレス
        ${data.email}

        件名
        ${data.subject}
        
        お問い合わせ内容
        ${data.message}
        `,
        }),
      ]);

      if (dbResult instanceof Error || emailResult instanceof Error) {
        console.error("エラーが発生しました:", dbResult, emailResult);
        return res.status(500).json({ success: false });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
  } else {
    return res.status(405).json({ success: false });
  }
}
