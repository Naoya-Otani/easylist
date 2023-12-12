import useSWR from "swr";
import { Major } from "@prisma/client";

const getSelectedMajors = (facultyId: number) => {
  const fetcher = (url: string): Promise<Major[]> =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/major/getSelectedMajors?facultyId=${facultyId}`,
    fetcher
  );

  return {
    majors: data ?? null,
    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
};

export default getSelectedMajors;
