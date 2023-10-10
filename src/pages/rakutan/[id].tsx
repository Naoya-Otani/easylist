import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { CourseSummary, Review } from "@prisma/client";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Id from "@/src/components/templates/rakutan/Id";
import { prisma } from "@/lib/prisma";
import { RakutanWithReviews } from "@/src/@types/rakutan";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
type Props = {
  data: RakutanWithReviews;
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
  const data = await fetch(`${baseUrl}/api/rakutan/postRakutanById`, {
    method: "POST",
    body: JSON.stringify({ id: params?.id }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return {
    props: {
      data,
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
