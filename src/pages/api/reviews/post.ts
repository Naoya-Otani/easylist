import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handlePostReviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { formData, userId, courseId } = req.body;

    if (!formData || !userId || !courseId) {
      res.status(400).json({ message: "不正なリクエストです" });
      return;
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.review.create({
        data: {
          ...formData,
          user: { connect: { id: userId } },
          course: { connect: { id: courseId } },
        },
      });
      res.status(200).json({ message: "レビューが作成されました" });
    });
  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).json({ message: "エラーが発生しました" });
  } finally {
    await prisma.$disconnect();
  }
}
