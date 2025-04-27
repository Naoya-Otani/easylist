import { prisma } from "@/lib/prisma";
import { retrieve_rakutan_by_id } from "@prisma/client/sql";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const id = parseId(req);
	try {
		const result = await getRakutanById(id);
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
}

function parseId(req: Request): number {
	const { searchParams } = new URL(req.url);
	const id = Number(searchParams.get("id"));
	if (Number.isNaN(id) || !Number.isInteger(id)) {
		throw new Error("Invalid ID");
	}
	return id;
}

async function getRakutanById(id: number) {
	return await prisma.$transaction(async (trx) => {
		const query = retrieve_rakutan_by_id(id);
		const [rakutan] = await trx.$queryRawTyped(query);
		if (!rakutan) {
			throw new Error("Rakutan not found");
		}
		const reviews = await trx.review.findMany({
			where: {
				courseId: id,
			},
		});

		return {
			course: rakutan,
			reviews: reviews,
		};
	});
}

function handleError(error: unknown): NextResponse {
	console.error(error);
	if (error instanceof Error) {
		if (error.message === "Invalid ID") {
			return NextResponse.json({ message: error.message }, { status: 400 });
		}
		if (error.message === "Rakutan not found") {
			return NextResponse.json({ message: error.message }, { status: 404 });
		}
	}
	return NextResponse.json(
		{ message: "Internal Server Error" },
		{ status: 500 },
	);
}
