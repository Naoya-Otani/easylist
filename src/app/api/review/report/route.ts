import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: Request) {
	const { reviewId } = await req.json();
	const userId = req.headers.get("Sender");

	if (!reviewId) {
		return NextResponse.json(
			{ success: false, message: "不正なリクエストです" },
			{ status: 400 },
		);
	}

	const mailUser = process.env.NEXT_PUBLIC_MAIL_USER;
	const mailPass = process.env.NEXT_PUBLIC_MAIL_PASS;

	if (!mailUser || !mailPass) {
		return NextResponse.json(
			{ success: false, message: "認証情報が設定されていません" },
			{ status: 500 },
		);
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
        報告者: ${userId}
      `,
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error("メール送信中にエラーが発生しました:", error);
		return NextResponse.json(
			{ success: false, message: "メール送信中にエラーが発生しました" },
			{ status: 500 },
		);
	} finally {
		transporter.close();
	}
}
