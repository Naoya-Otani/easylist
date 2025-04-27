import React, { type FC } from "react";
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
			className={`md:w-[80%] block mx-auto border border-gray-200 bg-gray-50 px-8 py-6 rounded-lg mb-8 shadow-lg tracking-wider text-gray-600 ${
				isReachingEnd || isLoadingMore
					? "cursor-not-allowed hover:translate-y-0 hover:rotate-x-0 hover:rotate-z-0 hover:bg-gray-50"
					: "cursor-pointer hover:bg-gray-200 duration-300 transform rotate-x-12 rotate-z-10 transition duration-400 ease-in-out hover:translate-y-1 hover:rotate-x-12 hover:rotate-z-10"
			}}`}
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
