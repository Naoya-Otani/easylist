import type { ReviewsWithCourse } from "@/src/@types/rakutan";
import type { UseReviewsWithUserIdResponse } from "@/src/@types/user";
import useSWR from "swr";

const fetcher = async (url: string): Promise<ReviewsWithCourse[]> => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch user data");
	}
	return response.json();
};

const useReviewsWithUserId = (userId: string): UseReviewsWithUserIdResponse => {
	const { data, error, isLoading } = useSWR<ReviewsWithCourse[]>(
		`/api/user/getReviewsWithUserId?userId=${userId}`,
		fetcher,
	);

	return {
		data: data ?? null,
		isLoading,
		isError: !!error,
	};
};

export default useReviewsWithUserId;
