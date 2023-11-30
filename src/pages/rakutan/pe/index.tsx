import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import type { NextPage } from "next";
import PE from "@/src/components/templates/rakutan/PE";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>体育 楽単リスト</title>
        <meta name="description" content="体育の楽単リストです。"></meta>
      </Head>
      <Header />
      <PE />
      <Footer />
    </>
  );
};

export default index;
