import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Online from "@/src/components/templates/rakutan/Online";

const online: NextPage = () => {
  return (
    <>
      <Head>
        <title>オンライン授業（オンデマンド） 楽単リスト</title>
        <meta
          name="description"
          content="オンライン（オンデマンド）の楽単リストです。"
        ></meta>
      </Head>
      <Header />
      <Online />
      <Footer />
    </>
  );
};

export default online;
