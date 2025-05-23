import type { Faculty, Major } from "@prisma/client";
import useSWR from "swr";

type UserProfileProps = {
	id: string;
	email: string | null;
	nickname: string | null;
	facultyId?: number | null;
	majorId?: number | null;
};

type UserWithFacultyMajor = UserProfileProps & {
	faculty?: Faculty;
	major?: Major;
};

const useUser = (userId: string | undefined) => {
	const fetcher = (url: string): Promise<UserWithFacultyMajor> =>
		fetch(url).then((res) => res.json());
	const { data, error, isLoading, mutate, isValidating } = useSWR(
		userId ? `/api/user/get?userId=${userId}` : null,
		fetcher,
	);

	return {
		user: data,
		isLoading: isLoading,
		isValidating: isValidating,
		error: error,
		mutate: mutate,
	};
};

export default useUser;
