import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Lawpolitics from "@/components/templates/courses/Lawpolitics";
import React from "react";
import Head from "next/head";

const lawpolitics = () => {
  return (
    <>
      <Head>
        <title>法学部政治学科 履修の組み方</title>
        <meta
          name="description"
          content="法学部政治学科の履修の組み方をまとめたページです"
        ></meta>
      </Head>
      <Header />
      <Lawpolitics />
      <Footer />
    </>
  );
};

export default lawpolitics;
