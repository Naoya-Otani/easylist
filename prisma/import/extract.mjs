import * as path from "path";
import * as fs from "fs";

const dataDir = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  "data"
);
const filePathArray = ["mon", "tue", "wed", "thu", "fri", "sat", "other"];

filePathArray.forEach((day) => {
  const filePath = path.join(dataDir, `${day}.json`);

  const rawData = fs.readFileSync(filePath, "utf-8");
  if (!rawData) {
    return;
  }

  const jsonData = JSON.parse(rawData);

  const extractedData = jsonData.searchResultDs
    .map((dow) => {
      return dow.sbjtDs.map((subject) => {
        return {
          campusName: subject.AREANM,
          faculties: [subject.ESTB],
          season: subject.SMS,
          subjectName: subject.SBJTNM,
          dayOfWeekPeriod: subject.DOWPD,
          academicFieldName: subject.FLDNM,
          entryNumber: subject.ENTNO,
          syllabusDetailUrl: subject.SYLLABUS_DETAIL_URL,
          locationName: subject.LCTNM,
          lessonModeName: subject.KNLESSONMODENM,
          timetableYear: String(subject.TTBLYR),
        };
      });
    })
    .flat();

  const outputDir = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "output"
  );
  const outputFilePath = path.join(outputDir, `${day}.json`);
  fs.writeFileSync(outputFilePath, JSON.stringify(extractedData, null, 2));
  console.log("Data extracted and written to:", outputFilePath);
});
