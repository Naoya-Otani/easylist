import React from "react";
import Head from "next/head";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Result from "@/src/components/templates/rakutan/specialized/Result";

const result = () => {
  return (
    <>
      <Head>
        <title>検索結果</title>
      </Head>
      <Header />
      <Result />
      <Footer />
    </>
  );
};

export default result;
