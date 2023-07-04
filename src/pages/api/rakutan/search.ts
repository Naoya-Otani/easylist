import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" || req.method === "POST") {
    const query = req.method === "GET" ? req.query.q : req.body.query;
    const prisma = new PrismaClient();

    try {
      const result = await prisma.courseSummary.findMany({
        where: {
          OR: [
            {
              locationName: { contains: query as string },
            },
            {
              subjectName: { contains: query as string },
            },
          ],
        },
        include: {
          reviews: true,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
