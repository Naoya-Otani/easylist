import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { PrismaClient, CourseSummary, Review } from "@prisma/client";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Id from "@/src/components/templates/rakutan/Id";

const prisma = new PrismaClient();

type Props = {
  data: Array<CourseSummary & { reviews: Review[] }>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await prisma.courseSummary.findMany({
    select: {
      id: true,
    },
  });

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
  const data = await prisma.courseSummary.findMany({
    where: {
      id: Number(params?.id),
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

const id: NextPage<Props> = ({ data }) => {
  const title = `${data[0].locationName} ${data[0].subjectName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`${data[0].locationName} ${data[0].subjectName}の詳細ページです。`}
        ></meta>
      </Head>
      <Header />
      <Id data={data} />
      <Footer />
    </>
  );
};

export default id;
