import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Science from "@/src/components/templates/courses/Science";
import React from "react";
import Head from "next/head";

const science = () => {
  return (
    <>
      <Head>
        <title>理工学部 履修の組み方</title>
        <meta
          name="description"
          content="理工学部の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Science />
      <Footer />
    </>
  );
};

export default science;
