import { prisma } from "@/lib/prisma";
import type { User } from "@/src/@types/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse<User | { error: string }>
) {
  const { userId } = req.query;

  if (!userId || userId === undefined) {
    return res.status(400).json({
      error: "Invalid request",
    });
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
      return res.status(404).json({
        error: "User not found",
      });
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

    return res.status(200).json(responseUser);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred",
    });
  } finally {
    await prisma.$disconnect();
  }
}
