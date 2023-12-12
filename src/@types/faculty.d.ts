import { Faculty, Major } from "@prisma/client";

export type FacultyWithMajors = Faculty & {
  majors: Major[];
};
