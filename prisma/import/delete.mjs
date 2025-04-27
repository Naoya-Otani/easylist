import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function deleteData() {
	try {
		await prisma.courseSummary.deleteMany({
			where: {
				academicFieldName: {
					startsWith: "体育",
				},
			},
		});
		console.log("データを削除しました。");
	} catch (error) {
		console.error("Error deleting data:", error);
	} finally {
		await prisma.$disconnect();
	}
}

deleteData();
