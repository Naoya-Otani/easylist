import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import Lawlaw from "@/src/components/templates/courses/Lawlaw";
import React from "react";
import Head from "next/head";

const lawlaw = () => {
  return (
    <>
      <Head>
        <title>法学部法学科 履修の組み方</title>
        <meta
          name="description"
          content="法学部法学科の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Lawlaw />
      <Footer />
    </>
  );
};

export default lawlaw;
