import React from "react";
import Head from "next/head";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";

const index = () => {
  return (
    <>
      <Head>
        <title>専門科目 楽単リスト</title>
      </Head>
      <Header />
      <div className="outlineStyle">
        <p className="text-center">専門科目の授業情報は現在準備中です</p>
      </div>
      <Footer />
    </>
  );
};

export default index;
