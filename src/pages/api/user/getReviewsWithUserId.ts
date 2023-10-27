import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { ReviewsWithCourse } from "@/src/@types/rakutan";

export default async function getReviewsWithUserId(
  req: NextApiRequest,
  res: NextApiResponse<ReviewsWithCourse[] | { error: string }>
) {
  const { userId } = req.query;

  if (!userId || userId === undefined) {
    return res.status(400).json({
      error: "Invalid request",
    });
  }

  try {
    const reviews = await prisma.review.findMany({
      where: {
        userId: userId as string,
      },
      select: {
        id: true,
        userId: true,
        courseId: true,
        attendance: true,
        hasReport: true,
        reportLength: true,
        hasExam: true,
        allowedCheatsheet: true,
        reputation: true,
        updatedAt: true,
        createdAt: true,
        detail: true,
        course: {
          select: {
            id: true,
            subjectName: true,
            dayOfWeekPeriod: true,
            locationName: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!reviews) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred",
    });
  } finally {
    await prisma.$disconnect();
  }
}
