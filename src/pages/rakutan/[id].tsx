import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Id from "@/src/components/templates/rakutan/Id";
import { prisma } from "@/lib/prisma";
import { Rakutan } from "@/src/@types/rakutan";
import { Review } from "@prisma/client";
import { RakutanWithReviews } from "@/src/@types/rakutan";

type Props = {
  data: RakutanWithReviews;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await prisma.courseSummary.findMany({
    select: {
      id: true,
    },
  });

  await prisma.$disconnect();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  let rakutan: Rakutan[] = await prisma.$queryRaw`
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
                cs."id" = CAST(${params?.id} AS INTEGER)
            GROUP BY
                cs."id"
    `;
  let review: Review[] = await prisma.review.findMany({
    where: {
      courseId: parseInt(params?.id as string),
    },
  });

  await prisma.$disconnect();

  // 数値型に変換
  const avgReputation = Number(rakutan[0].avg_reputation);

  const rakutanWithReviews: RakutanWithReviews = {
    course: {
      ...rakutan[0],
      avg_reputation: avgReputation,
    },
    reviews: review,
  };

  return {
    props: {
      data: rakutanWithReviews,
    },
  };
};

const id: NextPage<Props> = ({ data }) => {
  const title = `${data.course.locationName} ${data.course.subjectName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`${data.course.locationName} ${data.course.subjectName}の詳細ページです。`}
        ></meta>
      </Head>
      <Header />
      <Id data={data} />
      <Footer />
    </>
  );
};

export default id;
