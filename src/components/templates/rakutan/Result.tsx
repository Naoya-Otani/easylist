import type { Rakutan } from "@/src/@types/rakutan";
import Heading from "@/src/components/parts/common/Heading";
import useInfiniteData from "@/src/hooks/useInfiniteData";
import React, { useState, useEffect, type FC } from "react";
import LoadMoreBtn from "../../parts/rakutan/LoadMoreBtn";
import RenderRakutan from "../../parts/rakutan/RenderRakutan";
import SortFilterBoard from "../../parts/rakutan/SortFilterBoard";

const Result: FC<{ data: Rakutan[]; query: string }> = ({ data, query }) => {
	const [filter, setFilter] = useState<string>("normal");
	const [sort, setSort] = useState<string>("avg");
	const limit = 20;
	const getKey = (
		pageIndex: number,
		previousPageData: Rakutan[] | null,
	): string | null => {
		if (previousPageData && !previousPageData.length) return null;
		const url = `/api/rakutan/getRakutan?limit=${limit}&page=${
			pageIndex + 1
		}&category=all&filter=${filter}&query=${query}`;
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
				{data?.map((rakutan: Rakutan, index: number) => {
					return (
						<React.Fragment key={`${rakutan.id}_${index}`}>
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
		</div>
	);
};

export default Result;
