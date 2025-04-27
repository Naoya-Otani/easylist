import type { SearchSuggestion } from "@/src/@types/searchSuggestions";
import Link from "next/link";
import React from "react";

type Props = {
	suggestions: SearchSuggestion[];
};

const Suggestions = ({ suggestions }: Props) => {
	return (
		<div className="absolute top-[100%] left-0 right-0 w-full ">
			<ul className="bg-white rounded-md shadow-md p-2 max-h-48 overflow-y-auto">
				{suggestions.map((suggestion, index) => (
					<Link href={`/rakutan/${suggestion.id}`}>
						<li
							key={index}
							className="hover:bg-gray-100 text-sm cursor-pointer px-2 py-1"
						>
							<span className="mr-2">{suggestion.subjectName}</span>
							<span className="mr-2">{suggestion.locationName}</span>
							<span className="text-xs rounded-sm bg-yellow-100">
								口コミ {suggestion._count.reviews}件
							</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Suggestions;
