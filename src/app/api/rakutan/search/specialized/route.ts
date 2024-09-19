import { prisma } from "@/lib/prisma";
import type { Rakutan } from "@/src/@types/rakutan";
import {
	langOfCommerce,
	langOfEconomics,
	langOfLaw,
	langOfLetters,
	langOfPEARL,
	langOfScience,
} from "@/src/data/academicFieldName";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const faculty = searchParams.get("faculty");
	const lang = searchParams.get("lang");
	const reviews = searchParams.get("reviews");
	const filter = searchParams.get("filter");
	const limit = searchParams.get("limit");
	const page = searchParams.get("page");

	try {
		const reviewsString = reviews || "avg";
		const filterString = filter || "normal";
		const pageInt = Number.parseInt(page || "1", 10);
		const pageSize = limit ? Number.parseInt(limit, 10) : 30;
		const skip = (pageInt - 1) * pageSize;

		let filterQuery = "";
		let sortStandard = "avg_reputation";
		const filterQueryForDB: {
			lang: string[];
			faculty: string;
		} = {
			lang: [],
			faculty: "",
		};

		switch (faculty) {
			case "文":
				filterQueryForDB.faculty = "文/人文";
				filterQueryForDB.lang = langOfLetters;
				break;
			case "経済":
				filterQueryForDB.faculty = "経/経済";
				filterQueryForDB.lang = langOfEconomics;
				break;
			case "経済PEARL":
				filterQueryForDB.faculty = "経/経Ｐ";
				filterQueryForDB.lang = langOfPEARL;
				break;
			case "法政":
				filterQueryForDB.faculty = "法/政治";
				filterQueryForDB.lang = langOfLaw;
				break;
			case "法法":
				filterQueryForDB.faculty = "法/法律";
				filterQueryForDB.lang = langOfLaw;
				break;
			case "商":
				filterQueryForDB.faculty = "商/商";
				filterQueryForDB.lang = langOfCommerce;
				break;
			case "理工":
				filterQueryForDB.faculty = "理";
				filterQueryForDB.lang = langOfScience;
				break;
			default:
				console.error("faculty parameter is not specified");
				filterQueryForDB.faculty = "";
				break;
		}

		switch (lang) {
			case "英語":
				filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
					l.includes("英語"),
				);
				break;
			case "ドイツ語":
				filterQueryForDB.lang = filterQueryForDB.lang.filter((l) =>
					l.includes("ドイツ語"),
				);
				break;
			// 他の言語フィルターも同様に追加
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
            FROM (
              SELECT COUNT(*) AS "has_report_true_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."hasReport" = true
            ) AS "true_count",
            (
              SELECT COUNT(*) AS "has_report_false_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."hasReport" = false
            ) AS "false_count"
          ), FALSE
        ) AS "agg_hasReport",
        COALESCE(
          (
            SELECT 
              CASE 
                WHEN "attendance_true_count" > "attendance_false_count" THEN TRUE
                ELSE FALSE
              END
            FROM (
              SELECT COUNT(*) AS "attendance_true_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."attendance" = true
            ) AS "true_count",
            (
              SELECT COUNT(*) AS "attendance_false_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."attendance" = false
            ) AS "false_count"
          ), FALSE
        ) AS "agg_attendance",
        COALESCE(
          (
            SELECT 
              CASE 
                WHEN "has_exam_true_count" > "has_exam_false_count" THEN TRUE
                ELSE FALSE
              END
            FROM (
              SELECT COUNT(*) AS "has_exam_true_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."hasExam" = true
            ) AS "true_count",
            (
              SELECT COUNT(*) AS "has_exam_false_count"
              FROM "Review" AS "r"
              WHERE r."courseId" = cs."id"
              AND r."hasExam" = false
            ) AS "false_count"
          ), FALSE
        ) AS "agg_hasExam"
      FROM "CourseSummary" AS "cs"
      LEFT JOIN "Review" AS "r" ON cs."id" = r."courseId"
      WHERE ${filterQueryForDB.faculty} = ANY(cs."faculty")
      AND (cs."academic_field_name" IN (${Prisma.join(filterQueryForDB.lang)}))
      ${Prisma.raw(filterQuery)}
      GROUP BY cs."id"
      ORDER BY ${Prisma.raw(sortStandard)} DESC
      LIMIT ${pageSize}
      OFFSET ${skip};
    `;

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		);
	}
}
