import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
	const data = await req.json();
	const { userId, nickname, facultyId, majorId } = data;

	if (!userId || userId === undefined) {
		return NextResponse.json(
			{
				error: "Invalid request - userId",
			},
			{ status: 400 },
		);
	}

	if (!nickname || nickname === undefined) {
		console.log("nickname is undefined");
		return NextResponse.json(
			{
				error: "Invalid request - nickname",
			},
			{ status: 400 },
		);
	}

	if (!facultyId || facultyId === undefined) {
		return NextResponse.json(
			{
				error: "Invalid request - facultyId",
			},
			{ status: 400 },
		);
	}

	if (!majorId || majorId === undefined) {
		return NextResponse.json(
			{
				error: "Invalid request - majorId",
			},
			{ status: 400 },
		);
	}

	try {
		const user = await prisma.user.update({
			where: {
				id: userId as string,
			},
			data: {
				nickname: nickname,
				faculty: {
					connect: {
						id: facultyId as number,
					},
				},
				major: {
					connect: {
						id: majorId as number,
					},
				},
			},
		});

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		);
	}
}

export function GET() {
	return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
