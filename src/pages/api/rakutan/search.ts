import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Rakutan } from "@/src/@types/rakutan";

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Rakutan[] | void> {
  if (req.method === "GET" || req.method === "POST") {
    const { filter, reviews, query } =
      req.method === "GET" ? req.query : req.body;

    try {
      const reviewsString = reviews as string;
      const filterString = filter as string;
      let filterQuery: string;
      let sortStandard: string;

      switch (reviewsString) {
        case "avg":
          sortStandard = "avg_reputation";
          break;
        case "length":
          sortStandard = "count_reviews";
          break;
        default:
          sortStandard = "avg_reputation";
          break;
      }

      switch (filterString) {
        case "normal":
          filterQuery =
            "AND (cs.\"lesson_mode\" LIKE 'オンライン%' OR cs.\"lesson_mode\" LIKE '対面授業%')";
          break;
        case "online":
          filterQuery = "AND cs.\"lesson_mode\" LIKE 'オンライン%'";
          break;
        case "offline":
          filterQuery = "AND cs.\"lesson_mode\" LIKE '対面授業%'";
          break;
        // この2つはまだ実装していない
        // case "noAttendance":
        //   filterQuery = "AND cs.\"agg_attendance\" = false";
        //   break;
        // case "noExam":
        //   filterQuery = "AND \"agg_hasExam\" = false";
        //   break;
        default:
          console.error("filter parameter is not specified");
          filterQuery = "";
          break;
      }
      const data = await prisma.$queryRaw`
            SELECT
                cs."id" AS "id",
                cs."subject_name" AS "subjectName", 
                cs."location_name" AS "locationName",
                cs."academic_field_name" AS "academicFieldName",
                cs."day_of_week_period" AS "dayOfWeekPeriod",
                cs."lesson_mode" AS "lessonModeName",
                cs."faculty" AS "faculties",
                ROUND(COALESCE(AVG(r."reputation"), 0.0), 1) AS "avg_reputation",
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
                (cs."subject_name" LIKE '%' || ${query} || '%' OR
                cs."location_name" LIKE '%' || ${query} || '%')
                ${Prisma.raw(filterQuery)}
            GROUP BY
                cs."id"
            ORDER BY
                ${Prisma.raw(sortStandard)} DESC
      `;
      res.status(200).json(data);
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
