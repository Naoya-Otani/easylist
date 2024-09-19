import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get("userId");

	if (!userId) {
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}

	try {
		const reviews = await prisma.review.findMany({
			where: {
				userId: userId,
			},
			select: {
				id: true,
				userId: true,
				courseId: true,
				attendance: true,
				hasReport: true,
				reportLength: true,
				hasExam: true,
				allowedCheatsheet: true,
				reputation: true,
				updatedAt: true,
				createdAt: true,
				detail: true,
				course: {
					select: {
						id: true,
						subjectName: true,
						dayOfWeekPeriod: true,
						locationName: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return NextResponse.json(reviews, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
