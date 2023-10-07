import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Nature from "@/src/components/templates/rakutan/Nature";
import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

const nature: NextPage = () => {
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
      <Nature />
      <Footer />
    </>
  );
};

export default nature;
