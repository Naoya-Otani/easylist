import useSWRInfinite from "swr/infinite";
import type { Rakutan } from "../@types/rakutan";

function useInfiniteData(
	getKey: (
		pageIndex: number,
		previousPageData: Rakutan[] | null,
	) => string | null,
) {
	const limit = 20;

	const fetcher = (url: string): Promise<Rakutan[]> =>
		fetch(url).then((res) => res.json());

	const { data, error, size, setSize, isLoading } = useSWRInfinite(
		getKey,
		fetcher,
	);

	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");
	const isEmpty = data?.[0]?.length === 0;
	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < limit);

	const rakutans: Rakutan[] = data ? data.flat() : [];

	return {
		rakutans,
		isLoadingMore,
		isReachingEnd,
		isLoading,
		size,
		setSize,
	};
}

export default useInfiniteData;
