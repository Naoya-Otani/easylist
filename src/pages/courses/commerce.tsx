import Commerce from "@/src/components/templates/courses/Commerce";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import React from "react";
import Head from "next/head";

const commerce = () => {
  return (
    <>
      <Head>
        <title>商学部 履修の組み方</title>
        <meta
          name="description"
          content="商学部の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Commerce />
      <Footer />
    </>
  );
};

export default commerce;
