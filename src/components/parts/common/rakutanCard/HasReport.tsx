import React, { type FC } from "react";

const HasReport: FC<{ agg_hasReport: boolean; count_reviews: number }> = ({
	agg_hasReport,
	count_reviews,
}) => {
	let text;

	if (agg_hasReport === true) {
		text = "レポートあり";
	} else if (count_reviews > 0 && agg_hasReport === false) {
		text = "レポートなし";
	} else {
		text = "情報がありません";
	}

	return (
		<div className="flex mb-2 mt-4 text-gray-500">
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
				<path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
				<path d="M18 14v4h4" />
				<path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
				<path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				<path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M8 11h4" />
				<path d="M8 15h3" />
			</svg>
			<span>{text}</span>
		</div>
	);
};

export default HasReport;
