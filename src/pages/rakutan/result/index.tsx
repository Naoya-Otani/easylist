import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import Loading from "@/src/components/parts/common/Loading";
import { Rakutan } from "@/src/@types/rakutan";
import Heading from "@/src/components/parts/common/Heading";
import RenderRakutan from "@/src/components/parts/rakutan/RenderRakutan";
import SortFilterBoard from "@/src/components/parts/rakutan/SortFilterBoard";
import SearchBar from "@/src/components/parts/Header/SearchBar";

const Index = () => {
  const router = useRouter();
  const query = router.query.query as string;
  const [searchResults, setSearchResults] = useState<Rakutan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("normal");
  const [sort, setSort] = useState<string>("avg");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const query = router.query.q as string;
        const response = await fetch(
          `/api/rakutan/search?query=${query}&reviews=${sort}&filter=${filter}`
        );
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
  }, [query, filter, sort]);

  const renderSearchResults = () => {
    const decodedQuery = decodeURIComponent(router.query.q as string);
    let filteringResultMsg = "";
    switch (filter) {
      case "normal":
        filteringResultMsg = "通常";
        break;
      case "offline":
        filteringResultMsg = "対面授業";
        break;
      case "online":
        filteringResultMsg = "オンライン授業";
        break;
      default:
        "";
        break;
    }

    if (searchResults.length === 0) {
      return (
        <div className="font-notoSans outlineStyle">
          <SortFilterBoard
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          <div className="p-4">
            <div className="mb-14">
              <p className="text-gray-800 text-lg lg:text-2xl text-center font-semibold mb-2">
                検索結果はありませんでした
              </p>
              <p className="text-sm lg:text-base text-gray-500 text-center ">
                再度検索を行うか、フィルターを変更してみてください。
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center text-base lg:text-lg text-gray-800 gap-4 lg:gap-x-8 mb-20">
              <p className="pb-[2px]">
                検索ワード{" "}
                <span className="bg-gray-100 rounded-md py-1 px-2 ml-4">
                  {decodedQuery}
                </span>
              </p>
              <p className="pb-[2px]">
                フィルター{" "}
                <span className="bg-gray-100 rounded-md py-1 px-2 ml-4">
                  {filteringResultMsg}
                </span>
              </p>
            </div>

            <div className="flex justify-start lg:hidden">
              <SearchBar />
            </div>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <div className="font-notoSans outlineStyle">
          <div className="my-8">
            <Heading
              heading={
                decodedQuery + "の検索結果  " + searchResults.length + "件"
              }
            />
          </div>
          <SortFilterBoard
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          <div className="lg:px-16 flex flex-col lg:flex-row lg:flex-wrap justify-between">
            {searchResults?.map((rakutan: Rakutan) => {
              return (
                <React.Fragment key={`base_${rakutan.id}`}>
                  <RenderRakutan rakutan={rakutan} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
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
