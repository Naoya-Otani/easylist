import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CourseSummary, Review } from "@prisma/client";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Result from "@/src/components/templates/rakutan/Result";
import Loading from "@/src/components/parts/common/Loading";

const Index = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<
    Array<CourseSummary & { reviews: Review[] }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const query = router.query.q as string;
        const response = await fetch(`/api/rakutan/search?q=${query}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (router.query.q) {
      fetchSearchResults();
    }
  }, [router.query.q]);

  const renderSearchResults = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (searchResults.length === 0) {
      return (
        <p className="text-center text-2xl font-bold mt-8">
          検索結果はありませんでした
        </p>
      );
    }

    const decodedQuery = decodeURIComponent(router.query.q as string);
    return (
      <>
        <h1 className="text-center text-2xl font-bold mt-8">
          {`${searchResults.length}件の検索結果`}
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          「{decodedQuery}」の検索結果
        </p>
        <Result data={searchResults} />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>検索結果</title>
        <meta name="description" content="楽単リストの検索結果ページです。" />
      </Head>
      <Header />
      {renderSearchResults()}
      <Footer />
    </>
  );
};

export default Index;
