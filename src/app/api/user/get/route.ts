import { prisma } from "@/lib/prisma";
import type { User } from "@/src/@types/user";
import { NextResponse } from "next/server";

export const dynamic = "auto";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get("userId");

	if (!userId || userId === undefined) {
		return NextResponse.json(
			{
				error: "Invalid request",
			},
			{ status: 400 },
		);
	}

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: userId as string,
			},
			select: {
				id: true,
				name: true,
				email: true,
				nickname: true,
				faculty: true,
				facultyId: true,
				major: true,
				majorId: true,
			},
		});

		if (!user) {
			return NextResponse.json(
				{
					error: "User not found",
				},
				{ status: 404 },
			);
		}

		const responseUser: User = {
			id: user.id,
			name: user.name || undefined,
			email: user.email || undefined,
			nickname: user.nickname || undefined,
			faculty: user.faculty || undefined,
			facultyId: user.facultyId || undefined,
			major: user.major || undefined,
			majorId: user.majorId || undefined,
		};

		return NextResponse.json(responseUser, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
