import fs from "fs";
import path from "path";

function getAcademicFieldNames() {
	const faculties = ["commerce", "economics", "law", "letters", "science"];
	faculties.forEach((faculty) => {
		const __dirname = path.dirname(new URL(import.meta.url).pathname);
		const filePath = `${__dirname}/rawdata/lang/${faculty}/mergedData.json`;
		const data = fs.readFileSync(filePath, "utf8");
		const jsonData = JSON.parse(data);

		const academicFieldNames = jsonData.map((item) => item.academicFieldName);
		const uniqueFieldNames = [...new Set(academicFieldNames)];

		console.log(`Faculty: ${faculty} : ${uniqueFieldNames}`);
		return uniqueFieldNames;
	});
}

getAcademicFieldNames();
