"use client";

import type { Rakutan } from "@/src/@types/rakutan";
import Heading from "@/src/components/parts/common/Heading";
import LoadMoreBtn from "@/src/components/parts/rakutan/LoadMoreBtn";
import RenderRakutan from "@/src/components/parts/rakutan/RenderRakutan";
import SortFilterBoard from "@/src/components/parts/rakutan/SortFilterBoard";
import useInfiniteData from "@/src/hooks/useInfiniteData";
import React, { type FC, useEffect, useState, useMemo } from "react";

type RakutanListProps = {
	category: string;
	title: string;
};

const MemoizedRenderRakutan = React.memo(RenderRakutan);

const RakutanList: FC<RakutanListProps> = ({ category, title }) => {
	const [filter, setFilter] = useState<string>("normal");
	const [sort, setSort] = useState<string>("avg");
	const limit = 20;

	const getKey = (
		pageIndex: number,
		previousPageData: Rakutan[] | null,
	): string | null => {
		if (previousPageData && !previousPageData.length) return null;

		// オンライン授業のみはパラメーターが異なる
		if (category === "online") {
			const url = `/api/rakutan/getRakutan?limit=${limit}&page=${
				pageIndex + 1
			}&category=all&reviews=${sort}&filter=online`;
			return url;
		}

		const url = `/api/rakutan/getRakutan?limit=${limit}&page=${
			pageIndex + 1
		}&category=${category}&reviews=${sort}&filter=${filter}`;

		return url;
	};

	const { rakutans, isLoadingMore, isReachingEnd, size, setSize } =
		useInfiniteData(getKey);
	useEffect(() => {
		setSize(1);
	}, [filter, sort]);

	const memoizedRakutans = useMemo(
		() =>
			rakutans?.map((rakutan: Rakutan, index: number) => (
				<MemoizedRenderRakutan
					key={`${rakutan.id}_${index}`}
					rakutan={rakutan}
				/>
			)),
		[rakutans],
	);

	return (
		<div className="font-notoSans outlineStyle">
			<div className="my-8">
				<Heading heading={`楽単リスト　${title}`} />
			</div>
			<SortFilterBoard
				filter={filter}
				setFilter={setFilter}
				sort={sort}
				setSort={setSort}
			/>
			<div className="lg:px-16 flex flex-col lg:flex-row lg:flex-wrap justify-between">
				{memoizedRakutans}
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

export default React.memo(RakutanList);
