import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const prisma = new PrismaClient();

async function importData() {
	try {
		const filePath = path.join(__dirname, "mergedData.json");
		const jsonData = fs.readFileSync(filePath, "utf8");
		const courseSummary = JSON.parse(jsonData);

		await prisma.courseSummary.createMany({
			data: courseSummary,
		});

		console.log(courseSummary.length + "件のデータをインポートしました。");
	} catch (error) {
		console.error("Error importing data:", error);
	} finally {
		await prisma.$disconnect();
	}
}

importData();
