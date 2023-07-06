import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

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

  let data;
  try {
    data = JSON.parse(JSON.stringify(req.body));
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false });
  }

  await transporter.sendMail({
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
  });

  res.status(200).json({
    success: true,
  });
}
