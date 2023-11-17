import type { Review } from "@prisma/client";

interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: boolean;
  image?: string;
}

interface UseUserResponse {
  user: User | null;
  isLoading: boolean;
  error: Error | undefined;
}

interface UseReviewsWithUserIdResponse {
  data: ReviewsWithCourse[] | null;
  isLoading: boolean;
  isError: boolean;
}
