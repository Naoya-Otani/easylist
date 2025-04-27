import type React from "react";
import type { FC } from "react";

const Attendance: FC<{
	attendance: boolean;
	setAttendance: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ attendance, setAttendance }) => {
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
					<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
					<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
					<path d="M15 19l2 2l4 -4" />
				</svg>
				<label htmlFor="attendance" className="mr-2 text-gray-500">
					出席・リアぺが必要かどうか
				</label>
			</div>
			<input
				type="checkbox"
				id="attendance"
				checked={attendance}
				onChange={(event) => setAttendance(event.target.checked)}
				className="border border-gray-300 rounded bg-gray-50 text-yellow-500 focus:ring-3 focus:ring-yellow-300"
			/>
		</div>
	);
};

export default Attendance;
