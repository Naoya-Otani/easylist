import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { SearchSuggestion } from "@/src/@types/searchSuggestions";

export default async function getSuggestions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { keyword } = req.query;
    const suggestions: SearchSuggestion[] = await prisma.courseSummary.findMany(
      {
        where: {
          OR: [
            {
              subjectName: {
                contains: keyword as string,
              },
            },
            {
              locationName: {
                contains: keyword as string,
              },
            },
          ],
        },
        select: {
          id: true,
          subjectName: true,
          locationName: true,
          _count: {
            select: {
              reviews: true,
            },
          },
        },
        take: 5,
      }
    );

    return res.status(200).json(suggestions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
