import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handlePostReviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { reviewId } = req.body;

  try {
    await prisma.review.delete({
      where: {
        id: reviewId,
      },
    });
    res.status(200).json({ message: "レビューが削除されました" });
  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).json({ message: "エラーが発生しました" });
  } finally {
    await prisma.$disconnect();
  }
}
