import { execSync } from "child_process";

const specialFiles = [
	"page",
	"layout",
	"loading",
	"not-found",
	"error",
	"global-error",
	"route",
	"template",
	"default",
];

const specialDirs = ["api"];

function runTsPrune() {
	try {
		const output = execSync("npx ts-prune --project tsconfig.json", {
			encoding: "utf-8",
		});
		const lines = output.split("\n");

		const filteredLines = lines.filter((line) => {
			if (!line.trim()) return false;

			const filePath = line.split(":")[0];

			const fileName = filePath.split("/").pop().split(".")[0];
			if (specialFiles.includes(fileName)) return false;

			const dirs = filePath.split("/");
			if (dirs.some((dir) => specialDirs.includes(dir))) return false;

			if (
				filePath.includes("/app/") &&
				!filePath.endsWith(".page.ts") &&
				!filePath.endsWith(".page.tsx")
			)
				return false;

			return true;
		});

		if (filteredLines.length > 0) {
			console.log("未使用のエクスポートが見つかりました：");
			filteredLines.forEach((line) => console.log(line));
			process.exit(1);
		} else {
			console.log("未使用のエクスポートは見つかりませんでした。");
			process.exit(0);
		}
	} catch (error) {
		console.error("ts-prune の実行中にエラーが発生しました:", error);
		process.exit(1);
	}
}

runTsPrune();
