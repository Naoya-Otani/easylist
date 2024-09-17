import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { reviewId } = await req.json();

		if (!reviewId) {
			return NextResponse.json(
				{ message: "不正なリクエストです" },
				{ status: 400 },
			);
		}

		await prisma.review.delete({
			where: {
				id: reviewId,
			},
		});

		return NextResponse.json(
			{ message: "レビューが削除されました" },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
