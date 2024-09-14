import type { Faculty, Review } from "@prisma/client";

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
