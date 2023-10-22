import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function reportHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { reviewId } = req.body;

    if (!reviewId) {
      return res
        .status(400)
        .json({ success: false, message: "不正なリクエストです" });
    }

    const mailUser = process.env.NEXT_PUBLIC_MAIL_USER;
    const mailPass = process.env.NEXT_PUBLIC_MAIL_PASS;

    if (!mailUser || !mailPass) {
      return res
        .status(500)
        .json({ success: false, message: "認証情報が設定されていません" });
    }

    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    try {
      await transporter.sendMail({
        from: mailUser,
        to: mailUser,
        subject: "レビューが報告されました。",
        text: `
          以下のレビューが報告されました。
          レビューID: ${reviewId}
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "メール送信中にエラーが発生しました",
      });
    } finally {
      transporter.close();
    }
  }
}
