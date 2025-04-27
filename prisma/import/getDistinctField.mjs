import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getDistinctAcademicFieldNames() {
	try {
		const uniqueAcademicFieldNames = await prisma.courseSummary.findMany({
			select: {
				faculties: true,
			},
			distinct: ["faculties"],
		});

		console.log(uniqueAcademicFieldNames);

		const academicFieldNamesArray = uniqueAcademicFieldNames.map((item) => {
			return item.academicFieldName;
		});

		console.log(academicFieldNamesArray);
	} catch (error) {
		console.error("Error getting data:", error);
	} finally {
		await prisma.$disconnect();
	}
}

getDistinctAcademicFieldNames();
