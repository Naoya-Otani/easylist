import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Humanities from "@/src/components/templates/rakutan/Humanities";

const humanities: NextPage = () => {
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
      <Humanities />
      <Footer />
    </>
  );
};

export default humanities;
