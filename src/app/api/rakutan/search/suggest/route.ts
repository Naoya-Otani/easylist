import { prisma } from "@/lib/prisma";
import type { SearchSuggestion } from "@/src/@types/searchSuggestions";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const keyword = searchParams.get("keyword");

	if (!keyword) {
		return NextResponse.json(
			{ message: "Keyword query parameter is required" },
			{ status: 400 },
		);
	}

	try {
		const suggestions: SearchSuggestion[] = await prisma.courseSummary.findMany(
			{
				where: {
					OR: [
						{
							subjectName: {
								contains: keyword,
							},
						},
						{
							locationName: {
								contains: keyword,
							},
						},
					],
				},
				select: {
					id: true,
					subjectName: true,
					locationName: true,
					_count: {
						select: {
							reviews: true,
						},
					},
				},
				take: 5,
			},
		);

		return NextResponse.json(suggestions, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		);
	}
}
