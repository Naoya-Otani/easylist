import type { Review } from "@prisma/client";
import type React from "react";

const ReportLengthAvg: React.FC<{
	reviews: Review[];
}> = ({ reviews }) => {
	const reportLengthAvg =
		reviews.length > 0
			? reviews.reduce((a, b) => a + b.reportLength, 0) / reviews.length
			: 0;
	return (
		<div className="mx-auto mt-8 md:mb-0 flex flex-col justify-center items-center max-w-[660px] border border-gray-200 rounded-lg shadow p-4">
			<p className="text-gray-800 text-xl mb-2">{reportLengthAvg}文字</p>
			<p className="text-gray-500">レポートの文字数の平均値</p>
		</div>
	);
};

export default ReportLengthAvg;
