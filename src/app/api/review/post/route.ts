import { prisma } from "@/lib/prisma";
import { track } from "@vercel/analytics/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { formData, userId, courseId } = await req.json();

		if (!formData || !userId || !courseId) {
			return NextResponse.json(
				{ message: "不正なリクエストです" },
				{ status: 400 },
			);
		}

		await prisma.$transaction(async (prisma) => {
			await prisma.review.create({
				data: {
					...formData,
					user: { connect: { id: userId } },
					course: { connect: { id: courseId } },
				},
			});
		});

		await track("review_created");

		return NextResponse.json(
			{ message: "レビューが作成されました" },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
