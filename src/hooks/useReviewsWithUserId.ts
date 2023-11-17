import useSWR from "swr";
import { ReviewsWithCourse } from "@/src/@types/rakutan";
import { UseReviewsWithUserIdResponse } from "@/src/@types/user";

const useReviewsWithUserId = (userId: string): UseReviewsWithUserIdResponse => {
  const { data, error, isLoading } = useSWR<ReviewsWithCourse[]>(
    userId ? `/api/user/getReviewsWithUserId?userId=${userId}` : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    }
  );

  if (data === undefined) {
    return {
      data: null,
      isLoading: false,
      isError: true,
    };
  }

  return {
    data: data,
    isLoading: isLoading,
    isError: false,
  };
};

export default useReviewsWithUserId;
