import React, { FC, useEffect, useState } from "react";
import Heading from "@/src/components/parts/common/Heading";
import { Rakutan } from "@/src/@types/rakutan";
import RenderRakutan from "../../parts/rakutan/RenderRakutan";
import useInfiniteData from "@/src/hooks/useInfiniteData";
import LoadMoreBtn from "../../parts/rakutan/LoadMoreBtn";
import SortFilterBoard from "../../parts/rakutan/SortFilterBoard";
import { VList } from "virtua";

const Humanities: FC = () => {
  const [filter, setFilter] = useState<string>("normal");
  const [sort, setSort] = useState<string>("avg");
  const limit = 20;
  const getKey = (
    pageIndex: number,
    previousPageData: Rakutan[] | null
  ): string | null => {
    if (previousPageData && !previousPageData.length) return null;
    const url = `/api/rakutan/getRakutan?limit=${limit}&page=${
      pageIndex + 1
    }&category=humanities&reviews=${sort}&filter=${filter}`;
    return url;
  };
  const { rakutans, isLoadingMore, isReachingEnd, size, setSize } =
    useInfiniteData(getKey);
  useEffect(() => {
    setSize(1);
  }, [filter, sort]);

  return (
    <div className="font-notoSans outlineStyle">
      <div className="my-8">
        <Heading heading="楽単リスト　人文・社会学" />
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
            <VList count={rakutans.length}>
              <React.Fragment key={`base_${rakutan.id}`}>
                <RenderRakutan rakutan={rakutan} />
              </React.Fragment>
            </VList>
          );
        })}
      </div>
      <LoadMoreBtn
        setSize={setSize}
        size={size}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEnd}
      />
    </div>
  );
};

export default Humanities;
