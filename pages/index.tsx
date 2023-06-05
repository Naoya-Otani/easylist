import Header from "@/components/templates/Header";
import Head from "next/head";
import { NextPage } from "next";
import Footer from "@/components/templates/Footer";
import Index from "@/components/templates/Index";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>慶應楽単リスト</title>
        <meta
          name="description"
          content="慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。"
        />
      </Head>
      <Header />
      <Index />
      <Footer />
    </>
  );
};

export default Home;
