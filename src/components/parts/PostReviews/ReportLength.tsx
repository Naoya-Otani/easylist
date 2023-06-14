import React, { FC } from "react";

const ReportLength: FC<{
  hasReport: boolean;
  reportLength: number;
  setReportLength: React.Dispatch<React.SetStateAction<number>>;
}> = ({ hasReport, reportLength, setReportLength }) => {
  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(event.target.value);
    if (!isNaN(length) && length >= 0 && length <= 10000) {
      setReportLength(length);
    }
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="24"
          height="24"
          className="mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
        <label htmlFor="reportLength" className="mr-2 text-gray-500">
          レポートの文字数
        </label>
      </div>
      <div className="flex-col items-center">
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          className="bg-yellow-100 rounded-lg appearance-none cursor-pointer input-range"
          value={reportLength}
          onChange={handleLengthChange}
          disabled={!hasReport}
        />
        <p className="text-gray-500 text-sm lg:text-md text-end">
          {reportLength}文字
        </p>
      </div>
    </div>
  );
};

export default ReportLength;
