import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

const getAllFaculties = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  try {
    const faculties = await prisma.faculty.findMany({
      include: {
        major: true,
      },
    });
    res.status(200).json(faculties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllFaculties;
