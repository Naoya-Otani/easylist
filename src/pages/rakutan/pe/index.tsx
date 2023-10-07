import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import type { NextPage } from "next";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>体育 楽単リスト</title>
      </Head>
      <Header />
      <div className="outlineStyle"></div>
      <Footer />
    </>
  );
};

export default index;
