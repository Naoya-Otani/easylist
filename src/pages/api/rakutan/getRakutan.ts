import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Rakutan } from "@/src/@types/rakutan";
import { prisma } from "@/lib/prisma";
import * as fieldName from "@/src/data/academicFieldName";

export default async function getRakutan(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Rakutan[]> {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return [];
  }

  const { limit, page, category, reviews, filter } = req.query;
  const pageInt = parseInt(page as string, 10);
  const categoryString = category as string;
  const reviewsString = reviews as string;
  const filterString = filter as string;
  let filterQuery: string;
  let categoryArray: string[] = [];
  let data: Rakutan[] = [];

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

  switch (categoryString) {
    case "all":
      categoryArray = fieldName.all;
      break;
    case "humanities":
      categoryArray = fieldName.humanities;
      break;
    case "nature":
      categoryArray = fieldName.nature;
      break;
    case "pe":
      categoryArray = fieldName.pe;
      break;
    case "language":
      categoryArray = fieldName.lang;
      break;
    default:
      console.error("category parameter is not specified");
      categoryArray = [];
      break;
  }

  try {
    const pageSize = limit ? parseInt(limit as string, 10) : 30;
    const skip = (pageInt - 1) * pageSize;

    switch (reviewsString) {
      case "length":
        data = await prisma.$queryRaw`
            SELECT
                cs."id" AS "id",
                cs."subject_name" AS "subjectName", 
                cs."location_name" AS "locationName",
                cs."academic_field_name" AS "academicFieldName",
                cs."day_of_week_period" AS "dayOfWeekPeriod",
                cs."lesson_mode" AS "lessonModeName",
                cs."faculty" AS "faculties",
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
                cs."academic_field_name" IN (${Prisma.join(categoryArray)})
                ${Prisma.raw(filterQuery)}
            GROUP BY
                cs."id"
            ORDER BY
                "count_reviews" DESC
            LIMIT
                ${pageSize}
            OFFSET
                ${skip};
          `;
        res.status(200).json(data);
        return data;
      case "avg":
        data = await prisma.$queryRaw`
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
                cs."academic_field_name" IN (${Prisma.join(categoryArray)})
                ${Prisma.raw(filterQuery)}
            GROUP BY
                cs."id"
            ORDER BY
                "avg_reputation" DESC
            LIMIT
                ${pageSize}
            OFFSET
                ${skip};
        `;
        res.status(200).json(data);
        return data;
      default:
        console.error("不正な reviews パラメータです");
        return [];
    }
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}
