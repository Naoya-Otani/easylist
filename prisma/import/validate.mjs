import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outputDir = path.join(__dirname, "output");
const files = fs.readdirSync(outputDir);

const mergeDuplicateSubjectAndLocation = (data) => {
  const uniqueEntries = new Map();

  for (const entry of data) {
    const key = `${entry.subjectName}-${entry.locationName}`;
    if (uniqueEntries.has(key)) {
      // Duplicate entry found
      const existingEntry = uniqueEntries.get(key);
      // Merge dayOfWeekPeriod with "/" only if it's not already present
      const newDayOfWeekPeriod =
        entry.dayOfWeekPeriod &&
        !existingEntry.dayOfWeekPeriod.includes(entry.dayOfWeekPeriod)
          ? [existingEntry.dayOfWeekPeriod, entry.dayOfWeekPeriod]
              .filter(Boolean)
              .join("/")
          : existingEntry.dayOfWeekPeriod;

      existingEntry.dayOfWeekPeriod = newDayOfWeekPeriod;
    } else {
      uniqueEntries.set(key, entry);
    }
  }

  return Array.from(uniqueEntries.values());
};

const replaceEmptyDayOfWeekPeriod = (data) => {
  return data.map((entry) => ({
    ...entry,
    dayOfWeekPeriod: entry.dayOfWeekPeriod || "特殊",
  }));
};

const allData = [];

for (const file of files) {
  if (file.endsWith(".json")) {
    const filePath = path.join(outputDir, file);
    const jsonData = fs.readFileSync(filePath, "utf8");
    const courseSummary = JSON.parse(jsonData);

    allData.push(...courseSummary);
  }
}

const mergedData = mergeDuplicateSubjectAndLocation(allData);
const replacedData = replaceEmptyDayOfWeekPeriod(mergedData);

fs.writeFileSync(
  path.join(__dirname, "mergedData.json"),
  JSON.stringify(replacedData, null, 2)
);
console.log("Deduplicated data written to:", "mergedData.json");
