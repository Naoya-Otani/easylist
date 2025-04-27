import { prisma } from "@/lib/prisma";
import * as fieldName from "@/src/data/academicFieldName";
import type { TypedSql } from "@prisma/client/runtime/library";
import { retrieve_rakutan_review } from "@prisma/client/sql";
import { NextResponse } from "next/server";

type ReviewSortType = "length" | "avg";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TypedSqlToResultType<T> = T extends TypedSql<any, infer R> ? R : never;

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const limit = searchParams.get("limit");
	const page = searchParams.get("page");
	const category = searchParams.get("category");
	const reviews = searchParams.get("reviews") as ReviewSortType | null;
	const filter = searchParams.get("filter");

	const pageInt = Number.parseInt(page || "1", 10);
	const categoryString = category || "";
	const reviewsString = reviews || "";
	const filterString = filter || "";

	const categoryArray = getCategoryArray(categoryString);

	try {
		const pageSize = limit ? Number.parseInt(limit, 10) : 30;
		const skip = (pageInt - 1) * pageSize;

		const query = getQuery(
			categoryArray,
			filterString,
			reviewsString,
			pageSize,
			skip,
		);
		const result =
			await prisma.$queryRawTyped<TypedSqlToResultType<typeof query>>(query);

		return NextResponse.json(result, { status: 200 });
	} catch (e) {
		console.error(e);
		return NextResponse.json({ message: "Server Error" }, { status: 500 });
	}
}

function getCategoryArray(category: string): string[] {
	switch (category) {
		case "all":
			return fieldName.all;
		case "humanities":
			return fieldName.humanities;
		case "nature":
			return fieldName.nature;
		case "pe":
			return fieldName.pe;
		case "language":
			return fieldName.lang;
		default:
			return [];
	}
}

function getQuery(
	categoryArray: string[],
	filterString: string,
	reviewsString: string,
	pageSize: number,
	limit: number,
) {
	switch (reviewsString) {
		case "length":
			return retrieve_rakutan_review(
				categoryArray,
				filterString,
				"count_reviews",
				pageSize,
				limit,
			);
		case "avg":
			return retrieve_rakutan_review(
				categoryArray,
				filterString,
				"avg_reputation",
				pageSize,
				limit,
			);
		default:
			return retrieve_rakutan_review(
				categoryArray,
				filterString,
				"count_reviews",
				pageSize,
				limit,
			);
	}
}
