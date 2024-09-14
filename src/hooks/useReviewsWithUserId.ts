import type { ReviewsWithCourse } from "@/src/@types/rakutan";
import useSWR from "swr";

interface UseReviewsWithUserIdResponse {
	data: ReviewsWithCourse[] | null;
	isLoading: boolean;
	isError: boolean;
}

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
