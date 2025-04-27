import type { FC } from "react";

const Heading: FC<{ heading: string }> = ({ heading }) => {
	return (
		<div className="flex py-2 px-4 rounded-md items-center bg-yellow-100">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-5 h-5 mr-2 text-black"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<h1 className="mb-1 font-bold text-gray-800 text-lg lg:text-3xl">
				{heading}
			</h1>
		</div>
	);
};

export default Heading;
