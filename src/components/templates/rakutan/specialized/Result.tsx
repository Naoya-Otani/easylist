import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useInfiniteData from "@/src/hooks/useInfiniteData";
import { Rakutan } from "@/src/@types/rakutan";
import Heading from "@/src/components/parts/common/Heading";
import SortFilterBoard from "@/src/components/parts/rakutan/SortFilterBoard";
import RenderRakutan from "@/src/components/parts/rakutan/RenderRakutan";
import LoadMoreBtn from "@/src/components/parts/rakutan/LoadMoreBtn";
import LangAndSpecializedTab from "@/src/components/parts/rakutan/specialized/LangAndSpecializedTab";

const Result = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("normal");
  const [sort, setSort] = useState<string>("avg");
  const { faculty, lang } = router.query;
  const limit = 20;
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/rakutan/specialized/search?limit=${limit}&faculty=${faculty}&lang=${lang}&reviews=${sort}&filter=${filter}&page=${
      pageIndex + 1
    }`;
  };
  const { rakutans, isLoadingMore, isReachingEnd, isLoading, size, setSize } =
    useInfiniteData(getKey);

  useEffect(() => {
    if (faculty && lang) {
      setFilter("normal");
      setSort("avg");
    }
  }, [faculty, lang]);

  useEffect(() => {
    setSize(1);
  }, [filter, sort]);

  let decodedQuery = decodeURIComponent(faculty as string);
  decodedQuery += " " + decodeURIComponent(lang as string);
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

  if (!isLoading && (!rakutans || rakutans.length === 0)) {
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
            <Image
              src="/not-found.svg"
              alt="検索結果なし"
              width={656}
              height={458.68642}
              className="sm:w-[50%] md:w-[40%] block mx-auto mb-8 pointer-events-none"
            />
            <p className="text-gray-800 text-lg lg:text-2xl text-center font-semibold mb-2">
              検索結果はありませんでした
            </p>
            <p className="text-sm lg:text-base text-gray-500 text-center ">
              再度検索を行うか、フィルターを変更してみてください。
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center text-base lg:text-lg text-gray-800 gap-4 lg:gap-x-8 mb-20">
            <p className="pb-[2px]">
              学部・言語{" "}
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
          <LangAndSpecializedTab />
        </div>
      </div>
    );
  }
  return (
    <div className="font-notoSans outlineStyle">
      <div className="my-8">
        <Heading heading={decodedQuery + "の検索結果"} />
      </div>
      <SortFilterBoard
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <div className="lg:px-16 flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {rakutans?.map((rakutan: Rakutan) => {
          return (
            <React.Fragment key={`base_${rakutan.id}`}>
              <RenderRakutan rakutan={rakutan} />
            </React.Fragment>
          );
        })}
      </div>
      <LoadMoreBtn
        setSize={setSize}
        size={size}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEnd}
      />
      {isReachingEnd && <LangAndSpecializedTab />}
    </div>
  );
};

export default Result;
