import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>その他の科目 楽単リスト</title>
      </Head>
      <Header />
      <div className="outlineStyle">
        <p className="text-center">その他の科目の授業情報は現在準備中です</p>
      </div>
      <Footer />
    </>
  );
};

export default index;
