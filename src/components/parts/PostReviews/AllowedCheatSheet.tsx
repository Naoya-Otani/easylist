import type React from "react";
import type { FC } from "react";

const AllowedCheatSheet: FC<{
	allowedCheatsheet: boolean;
	hasExam: boolean;
	setAllowedCheatsheet: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ allowedCheatsheet, hasExam, setAllowedCheatsheet }) => {
	return (
		<div className="flex justify-between items-center mb-2">
			<div className="flex items-center text-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="mr-2"
					width="24"
					height="24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
					/>
				</svg>
				<label htmlFor="allowedCheatsheet" className="mr-2 text-gray-500">
					持ち込みの可否
				</label>
			</div>
			<input
				type="checkbox"
				id="allowedCheatsheet"
				checked={allowedCheatsheet}
				onChange={(event) => setAllowedCheatsheet(event.target.checked)}
				disabled={!hasExam}
				className="border border-gray-300 rounded bg-gray-50 text-yellow-500 focus:ring-3 focus:ring-yellow-300"
			/>
		</div>
	);
};

export default AllowedCheatSheet;
