type Props = {
	dayOfWeekPeriod: string;
};

const ScheduleRow = ({ dayOfWeekPeriod }: Props) => {
	return (
		<div className="flex text-gray-500 mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6 mr-2"
			>
				<title>曜日・時限</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<p>{dayOfWeekPeriod}</p>
		</div>
	);
};

export default ScheduleRow;
