"use client";

import type { Rakutan } from "@/src/@types/rakutan";
import Heading from "@/src/components/parts/common/Heading";
import LoadMoreBtn from "@/src/components/parts/rakutan/LoadMoreBtn";
import RenderRakutan from "@/src/components/parts/rakutan/RenderRakutan";
import SortFilterBoard from "@/src/components/parts/rakutan/SortFilterBoard";
import useInfiniteData from "@/src/hooks/useInfiniteData";
import { useSearchParams } from "next/navigation";
import { type ReadonlyURLSearchParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState, useMemo } from "react";

const MemoizedRenderRakutan = React.memo(RenderRakutan);

const SearchResult: React.ComponentType = () => {
	const searchParams = useSearchParams() as ReadonlyURLSearchParams;
	const router = useRouter();
	const [filter, setFilter] = useState<string>("normal");
	const [sort, setSort] = useState<string>("avg");
	const limit = 20;
	const keyword = searchParams.get("keyword");

	const updateStateFromUrl = useCallback(() => {
		const urlFilter = searchParams.get("filter");
		const urlSort = searchParams.get("sort");

		if (urlFilter) setFilter(urlFilter);
		if (urlSort) setSort(urlSort);
	}, [searchParams]);

	useEffect(() => {
		updateStateFromUrl();
	}, [updateStateFromUrl]);

	const updateUrl = useCallback(() => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set("filter", filter);
		newSearchParams.set("sort", sort);
		router.push(`?${newSearchParams.toString()}`, { scroll: false });
	}, [filter, sort, searchParams, router]);

	useEffect(() => {
		updateUrl();
	}, [filter, sort, updateUrl]);

	const getKey = useCallback(
		(pageIndex: number, previousPageData: Rakutan[] | null): string | null => {
			if (previousPageData && !previousPageData.length) return null;

			const url = `/api/rakutan/search?limit=${limit}&page=${
				pageIndex + 1
			}&reviews=${sort}&filter=${filter}&keyword=${keyword}`;

			return url;
		},
		[sort, filter, keyword],
	);

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
				<Heading heading={`${keyword}の検索結果`} />
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

export default React.memo(SearchResult);
