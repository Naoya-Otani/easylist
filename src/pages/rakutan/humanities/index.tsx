import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Humanities from "@/src/components/templates/rakutan/Humanities";
import { PrismaClient, CourseSummary, Review } from "@prisma/client";
import type { NextPage, GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";

const prisma = new PrismaClient();

type Props = {
  data: Array<CourseSummary & { reviews: Review[] }>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await prisma.courseSummary.findMany({
    where: {
      academicFieldName: {
        in: [
          "人文科学科目選択",
          "総合教育科目Ⅱ類（人文・社会科学系科目）講義科目",
          "総合教育科目第１・２学年設置科目系列Ｘ（人文・社会・学際系列）",
          "総合教育科目選択必修（Ⅱ系）Ⅱ系　人文・社会系",
          "総合教育科目選択必修（Ⅱ系）Ⅱ系　人文・社会系（ＰＥＡＲＬ）",
          "総合教育科目人文科学系列",
          "総合教育科目社会科学系列",
        ],
      },
    },
    include: {
      reviews: true,
    },
  });

  return {
    props: {
      data,
    },
  };
};

const humanities: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>人文・社会科学系列 楽単リスト</title>
        <meta
          name="description"
          content="人文・社会系列の楽単リストです。"
        ></meta>
      </Head>
      <Header />
      <Humanities data={data} />
      <Footer />
    </>
  );
};

export default humanities;
