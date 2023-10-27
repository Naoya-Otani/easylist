import React from "react";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import User from "@/src/components/templates/User/User";
import Head from "next/head";

const UserPage = () => {
  return (
    <>
      <Head>
        <title>マイページ - 慶應楽単リスト</title>
        <meta
          name="description"
          content="慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。"
        />
      </Head>
      <Header />
      <User />
      <Footer />
    </>
  );
};

export default UserPage;
