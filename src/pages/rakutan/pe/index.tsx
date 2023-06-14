import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>体育 楽単リスト</title>
      </Head>
      <Header />
      <div className="outlineStyle">
        <p className="text-center">体育の授業情報は現在準備中です</p>
      </div>
      <Footer />
    </>
  );
};

export default index;
