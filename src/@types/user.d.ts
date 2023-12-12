import type { Review, Faculty } from "@prisma/client";

interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: boolean;
  image?: string;
  nickname?: string;
  faculty?: Faculty;
  facultyId?: number;
  major?: Major;
  majorId?: number;
}

interface UseUserResponse {
  user: User | null;
  isLoading: boolean;
  error: Error | undefined;
  mutate: () => any;
}

interface UseReviewsWithUserIdResponse {
  data: ReviewsWithCourse[] | null;
  isLoading: boolean;
  isError: boolean;
}
