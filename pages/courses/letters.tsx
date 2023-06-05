import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Letters from "@/components/templates/courses/Letters";
import React from "react";
import Head from "next/head";

const letters = () => {
  return (
    <>
      <Head>
        <title>文学部 履修の組み方</title>
        <meta
          name="description"
          content="文学部の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Letters />
      <Footer />
    </>
  );
};

export default letters;
