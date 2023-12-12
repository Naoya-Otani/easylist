import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function updateUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { userId, nickname, facultyId, majorId } = req.body;
  console.log(req.body);
  if (!userId || userId === undefined) {
    return res.status(400).json({
      error: "Invalid request - userId",
    });
  }

  if (!nickname || nickname === undefined) {
    console.log("nickname is undefined");
    return res.status(400).json({
      error: "Invalid request - nickname",
    });
  } else if (nickname == "") {
    console.log("nickname is empty");
  }

  if (!facultyId || facultyId === undefined) {
    return res.status(400).json({
      error: "Invalid request - facultyId",
    });
  }

  if (!majorId || majorId === undefined) {
    return res.status(400).json({
      error: "Invalid request - majorId",
    });
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

    console.log(user, "backend");

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
