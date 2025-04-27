import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: Request) {
	const transporter = createTransport({
		port: 465,
		host: "smtp.gmail.com",
		secure: true,
		auth: {
			user: process.env.NEXT_PUBLIC_EMAIL_USER,
			pass: process.env.EMAIL_APP_PASS,
		},
	});

	try {
		const data = await req.json();

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
				from: process.env.NEXT_PUBLIC_EMAIL_USER,
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
			return NextResponse.json({ success: false }, { status: 500 });
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}

export function GET() {
	return NextResponse.json({ success: false }, { status: 405 });
}
