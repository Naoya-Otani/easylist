import Economics from "@/components/templates/courses/Economics";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import React from "react";
import Head from "next/head";

const economics = () => {
  return (
    <>
      <Head>
        <title>経済学部 履修の組み方</title>
        <meta
          name="description"
          content="経済学部の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Economics />
      <Footer />
    </>
  );
};

export default economics;
