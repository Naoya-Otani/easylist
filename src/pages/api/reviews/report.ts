import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function reportHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { reviewId } = req.body;
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      },
    });
    try {
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_MAIL_USER,
        to: process.env.NEXT_PUBLIC_MAIL_USER,
        subject: "レビューが報告されました。",
        text: `
      以下のレビューが報告されました。
      レビューID: ${reviewId}
        `,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false });
    }
  }
}
