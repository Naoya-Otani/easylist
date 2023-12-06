import { NextApiRequest, NextApiResponse } from "next";
import { Rakutan } from "@/src/@types/rakutan";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  langOfCommerce,
  langOfEconomics,
  langOfLaw,
  langOfLetters,
  langOfScience,
  langOfPEARL,
} from "@/src/data/academicFieldName";

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { faculty, lang, reviews, filter, limit, page, } = req.query;

  try {
    const reviewsString = reviews as string;
    const filterString = filter as string;
    const pageInt = parseInt(page as string, 10);
    const pageSize = limit ? parseInt(limit as string, 10) : 30;
    const skip = (pageInt - 1) * pageSize;
console.log(pageInt, pageSize, skip);
    let filterQuery: string;
    let sortStandard: string;
    let filterQueryForDB: {
      lang: string[];
      faculty: string;
    } = {
      lang: [],
      faculty: "",
    };

    switch (faculty) {
      case "文":
        filterQueryForDB.faculty = '文/人文';
        filterQueryForDB.lang = langOfLetters;
        break;
      case "経済":
        filterQueryForDB.faculty = '経/経済';
        filterQueryForDB.lang = langOfEconomics;
        break;
      case "経済PEARL":
        filterQueryForDB.faculty = '経/経Ｐ';
        filterQueryForDB.lang = langOfPEARL;
        break;
      case "法政":
        filterQueryForDB.faculty = '法/政治';
        filterQueryForDB.lang = langOfLaw;
        break;
      case "法法":
        filterQueryForDB.faculty = '法/法律';
        filterQueryForDB.lang = langOfLaw;
        break;
      case "商":
        filterQueryForDB.faculty = '商/商';
        filterQueryForDB.lang = langOfCommerce;
        break;
      case "理工":
        filterQueryForDB.faculty = '理';
        filterQueryForDB.lang = langOfScience;
        break;
      default:
        console.error("faculty parameter is not specified");
        filterQueryForDB.faculty = '';
        break;
    }

    switch (lang) {
      case "英語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("英語")
        );
        break;
      case "ドイツ語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("ドイツ語")
        );
        break;
      case "中国語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("中国語")
        );
        break;
      case "スペイン語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("スペイン語")
        );
        break;
      case "フランス語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("フランス語")
        );
        break;
      case "イタリア語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("イタリア語")
        );
        break;
      case "日本語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("日本語")
        );
        break;
      case "ロシア語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("ロシア語")
        );
        break;
      case "朝鮮語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("朝鮮語")
        );
        break;
      case "韓国語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("韓国語")
        );
        break;
      case "アラビア語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("アラビア語")
        );
        break;
      case "ラテン語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("ラテン語")
        );
        break;
      case "ギリシャ語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("ギリシャ語")
        );
        break;
      case "ポルトガル語":
        filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
          l.includes("ポルトガル語")
        );
        break;
      default:
        console.error("lang parameter is not specified");
        filterQueryForDB.lang = [""];
        break;
    }

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

    const data: Rakutan[] = await prisma.$queryRaw`
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
                ${filterQueryForDB.faculty} = ANY(cs."faculty")
            AND
                (cs."academic_field_name" IN (${Prisma.join(
                  filterQueryForDB.lang
                )}))
                ${Prisma.raw(filterQuery)}
            GROUP BY
                cs."id"
            ORDER BY
                ${Prisma.raw(sortStandard)} DESC
            LIMIT
                ${pageSize}
            OFFSET
                ${skip};
      `;
      console.log(data);
    res.status(200).json(data);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  } finally {
    await prisma.$disconnect();
  }
}
