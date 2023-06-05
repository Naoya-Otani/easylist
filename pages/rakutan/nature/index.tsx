import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Nature from "@/components/templates/rakutan/Nature";
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
          "総合教育科目Ⅰ類（自然科学系科目）実験科目",
          "総合教育科目選択必修（Ⅰ系）Ⅰ系　自然・数理系",
          "総合教育科目選択必修（Ⅰ系）Ⅰ系　自然・数理系（生物・物理・化学）",
          "総合教育科目選択必修（Ⅰ系）Ⅰ系　自然・数理系（ＰＥＡＲＬ）",
          "総合教育科目自然科学系列",
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

const nature: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>自然科学系列 楽単リスト</title>
        <meta
          name="description"
          content="自然科学系列の楽単リストです。"
        ></meta>
      </Head>
      <Header />
      <Nature data={data} />
      <Footer />
    </>
  );
};

export default nature;
