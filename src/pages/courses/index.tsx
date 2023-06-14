import Course from "@/src/components/templates/courses/Course";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>履修の組み方 概要</title>
        <meta name="description" content="履修の組み方の概要ページです"></meta>
      </Head>
      <Header />
      <Course />
      <Footer />
    </>
  );
};

export default index;
