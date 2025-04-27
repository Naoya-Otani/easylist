import React, { type FC } from "react";

const HeadingXs: FC<{ heading: string }> = ({ heading }) => {
	return (
		<h3 className="py-1 px-2 bg-transparent border border-solid border-b-yellow-200 border-t-0 border-r-0 border-l-0 border-b-4 lg:text-lg">
			{heading}
		</h3>
	);
};

export default HeadingXs;
