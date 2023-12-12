import useSWR from "swr";
import { FacultyWithMajors } from "../@types/faculty";

const getAllFacultiesWithMajors = () => {
  const fetcher = (url: string): Promise<FacultyWithMajors[]> =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/faculty/getAllFaculties`,
    fetcher
  );

  return {
    faculties: data ?? null,
    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
};

export default getAllFacultiesWithMajors;
