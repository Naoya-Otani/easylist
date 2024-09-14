import type { Faculty, Major } from "@prisma/client";

export type FacultyWithMajors = Faculty & {
	majors: Major[];
};
