import useSWR from "swr";
import type { User } from "@/src/@types/user";
import { UseUserResponse } from "../@types/user";

const useUser = (userId: string | undefined): UseUserResponse => {
  const { data, error, isLoading } = useSWR<User>(
    userId ? `/api/user/getUser?userId=${userId}` : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    }
  );

  return {
    user: data ?? null,
    isLoading: isLoading,
    error: error,
  };
};

export default useUser;
