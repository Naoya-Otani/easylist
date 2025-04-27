import type React from "react";
import type { FC } from "react";

const HasExam: FC<{
	hasExam: boolean;
	setHasExam: React.Dispatch<React.SetStateAction<boolean>>;
	setAllowedCheatsheet: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ hasExam, setHasExam, setAllowedCheatsheet }) => {
	const handleHasExamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		setHasExam(checked);
		if (!checked) {
			setAllowedCheatsheet(false);
		}
	};
	return (
		<div className="flex justify-between items-center mb-2">
			<div className="flex items-center text-gray-500">
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
					<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
					<path d="M21 21l-6 -6" />
					<path d="M7 10l2 2l4 -4" />
				</svg>
				<label htmlFor="hasExam" className="mr-2 text-gray-500">
					試験の有無
				</label>
			</div>
			<input
				type="checkbox"
				id="hasExam"
				checked={hasExam}
				onChange={handleHasExamChange}
				className="border border-gray-300 rounded bg-gray-50 text-yellow-500 focus:ring-3 focus:ring-yellow-300"
			/>
		</div>
	);
};

export default HasExam;
