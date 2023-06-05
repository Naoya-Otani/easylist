import TextSection from "@/components/parts/rakutan/TextSection";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>楽単リスト</title>
        <meta name="description" content="楽単リストの概要ページです。"></meta>
      </Head>
      <Header />
      <TextSection />
      <Footer />
    </>
  );
};

export default index;
