import React from "react";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Contact from "@/src/components/templates/Contact/Contact";

const index = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ</title>
        <meta
          name="description"
          content="楽単リストへのお問い合わせページです"
        ></meta>
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
