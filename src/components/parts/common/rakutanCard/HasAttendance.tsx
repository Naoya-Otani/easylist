import { SavedReview } from "@/src/@types/rakutan";
import React, { type FC } from "react";

const HasAttendance: FC<{ agg_attendance: boolean; count_reviews: number }> = ({
	agg_attendance,
	count_reviews,
}) => {
	let text;

	if (agg_attendance === true) {
		text = "出席あり";
	} else if (count_reviews > 0 && agg_attendance === false) {
		text = "出席なし";
	} else {
		text = "情報がありません";
	}

	return (
		<div className="flex mb-2 text-gray-500">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="mr-2"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
				<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
				<path d="M15 19l2 2l4 -4" />
			</svg>
			<span>{text}</span>
		</div>
	);
};

export default HasAttendance;
