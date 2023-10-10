import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Rakutan, RakutanWithReviews } from "@/src/@types/rakutan";
import { Review } from "@prisma/client";

export default async function postRakutanById(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<RakutanWithReviews | void> {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  let { id } = req.body;
  id = Number(id);

  try {
    let data: Rakutan[] = await prisma.$queryRaw`
            SELECT
                cs."id" AS "id",
                cs."subject_name" AS "subjectName", 
                cs."location_name" AS "locationName",
                cs."academic_field_name" AS "academicFieldName",
                cs."day_of_week_period" AS "dayOfWeekPeriod",
                cs."lesson_mode" AS "lessonModeName",
                cs."faculty" AS "faculties",
                cs."entry_number" AS "entryNumber",
                ROUND(COALESCE(AVG(r."reputation"), 0), 1) AS "avg_reputation",
                            COALESCE(CAST(COUNT(r."id") AS INTEGER), 0) AS "count_reviews",
                COALESCE(
                    (
                        SELECT 
                            CASE 
                                WHEN "has_report_true_count" > "has_report_false_count" THEN TRUE
                                ELSE FALSE
                            END
                        FROM (SELECT 
                                COUNT(*) AS "has_report_true_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."hasReport" = true) AS "true_count",
                              (SELECT 
                                COUNT(*) AS "has_report_false_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."hasReport" = false) AS "false_count"
                    ), 
                    FALSE
                ) AS "agg_hasReport",
                COALESCE(
                    (
                        SELECT 
                            CASE 
                                WHEN "attendance_true_count" > "attendance_false_count" THEN TRUE
                                ELSE FALSE
                            END
                        FROM (SELECT 
                                COUNT(*) AS "attendance_true_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."attendance" = true) AS "true_count",
                              (SELECT 
                                COUNT(*) AS "attendance_false_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."attendance" = false) AS "false_count"
                    ), 
                    FALSE
                ) AS "agg_attendance",
                COALESCE(
                    (
                        SELECT 
                            CASE 
                                WHEN "has_exam_true_count" > "has_exam_false_count" THEN TRUE
                                ELSE FALSE
                            END
                        FROM (SELECT 
                                COUNT(*) AS "has_exam_true_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."hasExam" = true) AS "true_count",
                              (SELECT 
                                COUNT(*) AS "has_exam_false_count"
                              FROM "Review" AS "r"
                              WHERE r."courseId" = cs."id"
                              AND r."hasExam" = false) AS "false_count"
                    ), 
                    FALSE
                ) AS "agg_hasExam"
            FROM
                "CourseSummary" AS "cs"
            LEFT JOIN
                "Review" AS "r" ON cs."id" = r."courseId"
            WHERE
                cs."id" = CAST(${id} AS INTEGER)
            GROUP BY
                cs."id"
          `;
    let review: Review[] = await prisma.review.findMany({
      where: {
        courseId: id,
      },
    });

    const RakutanWithReviews: RakutanWithReviews = {
      course: data[0],
      reviews: review,
    };

    res.status(200).json(RakutanWithReviews);
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}
