import React from "react";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import AboutUs from "@/src/components/templates/AboutUs/AboutUs";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>楽単リスト 運営チーム</title>
        <meta
          name="description"
          content="楽単リストの運営チームの紹介ページです"
        ></meta>
      </Head>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default index;
