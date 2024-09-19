import type { Faculty, Major } from "@prisma/client";

export interface User {
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
