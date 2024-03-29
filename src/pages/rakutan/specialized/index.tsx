import React from "react";
import Head from "next/head";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Specialized from "@/src/components/templates/rakutan/specialized/Specialized";

const index = () => {
  return (
    <>
      <Head>
        <title>専門科目 楽単リスト</title>
      </Head>
      <Header />
      <Specialized />
      <Footer />
    </>
  );
};

export default index;
