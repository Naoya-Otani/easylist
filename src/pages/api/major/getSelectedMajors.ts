import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function getSelectedMajors(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { facultyId } = req.query;
    if (!facultyId) {
      return res.status(400).json({ message: "Missing facultyId" });
    }
    if (facultyId === "0") {
      const majors = await prisma.major.findMany();
      return res.status(200).json(majors);
    }
    const majors = await prisma.major.findMany({
      where: {
        facultyId: Number(facultyId),
      },
    });
    res.status(200).json(majors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
