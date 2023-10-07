import React, { FC } from "react";
import Loading from "../../parts/common/Loading";

const LoadMoreBtn: FC<{
  setSize: (size: number) => void;
  size: number;
  isLoadingMore: boolean | undefined;
  isReachingEnd: boolean | undefined;
}> = ({ setSize, size, isLoadingMore, isReachingEnd }) => {
  return (
    <button
      onClick={() => setSize(size + 1)}
      disabled={isReachingEnd || isLoadingMore}
      className="w-full bg-gray-50 p-8 rounded-lg mb-8 shadow-lg hover:bg-gray-200 duration-300 transform rotate-x-12 rotate-z-10 transition duration-400 ease-in-out hover:translate-y-1 hover:rotate-x-12 hover:rotate-z-10 text-gray-600"
    >
      {isLoadingMore ? (
        <Loading />
      ) : isReachingEnd ? (
        "これ以上表示する授業はありません"
      ) : (
        "もっと見る"
      )}
    </button>
  );
};

export default LoadMoreBtn;
