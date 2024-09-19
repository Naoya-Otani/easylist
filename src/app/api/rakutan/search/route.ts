import { prisma } from "@/lib/prisma";
import { search_rakutan } from "@prisma/client/sql";
import { NextResponse } from "next/server";
import { z } from "zod";

type SearchParams = {
	keyword: string;
	reviews: string;
	filter: string;
	pageSize: number;
	skip: number;
	faculty: string | null;
	lang: string | null;
};

const searchSchema = z.object({
	keyword: z.string().min(1, "Keyword is required"),
	reviews: z.string(),
	filter: z.string(),
	pageSize: z.number().int().positive().default(30),
	skip: z.number().int().nonnegative().default(0),
	faculty: z.string().nullable(),
	lang: z.string().nullable(),
});

export async function GET(req: Request) {
	const params = await parseQueries(req);
	try {
		const result = await searchRakutan(params);
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
}

async function parseQueries(req: Request): Promise<SearchParams> {
	const { searchParams } = new URL(req.url);
	const page = Number.parseInt(searchParams.get("page") || "1", 10);
	const limit = Number.parseInt(searchParams.get("limit") || "30", 10);

	const rawParams = {
		keyword: searchParams.get("keyword"),
		reviews: searchParams.get("reviews"),
		filter: searchParams.get("filter"),
		pageSize: limit,
		skip: (page - 1) * limit,
		faculty: searchParams.get("faculty"),
		lang: searchParams.get("lang"),
	};

	return searchSchema.parseAsync(rawParams);
}

async function searchRakutan(params: SearchParams) {
	const { keyword, reviews, filter, pageSize, skip } = params;
	const query = search_rakutan(
		keyword,
		filter || "",
		reviews || "",
		pageSize,
		skip,
	);
	const result = await prisma.$queryRawTyped(query);

	return result;
}

function handleError(error: unknown): NextResponse {
	console.error(error);

	if (error instanceof z.ZodError) {
		return NextResponse.json(
			{ message: "Invalid query parameters", errors: error.errors },
			{ status: 400 },
		);
	}

	if (error instanceof Error) {
		switch (error.message) {
			case "Failed to find Rakutan":
				return NextResponse.json({ message: error.message }, { status: 404 });
			default:
				return NextResponse.json(
					{ message: "Internal Server Error" },
					{ status: 500 },
				);
		}
	}

	return NextResponse.json({ message: "Unknown Error" }, { status: 500 });
}
