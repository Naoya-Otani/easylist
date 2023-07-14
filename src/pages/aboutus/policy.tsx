import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Policy from "@/src/components/templates/AboutUs/Policy";

const policy = () => {
  return (
    <>
      <Head>
        <title>楽単リスト プライバシーポリシー</title>
        <meta
          name="description"
          content="楽単リストのプライバシーポリシーを明記したページです。"
        ></meta>
      </Head>
      <Header />
      <Policy />
      <Footer />
    </>
  );
};

export default policy;
