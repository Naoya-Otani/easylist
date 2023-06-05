import React from "react";
import Head from "next/head";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import Contact from "@/components/templates/Contact/Contact";

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
