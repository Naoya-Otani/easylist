import React, { FC } from "react";

const HasReport: FC<{
  hasReport: boolean;
  setHasReport: React.Dispatch<React.SetStateAction<boolean>>;
  setReportLength: React.Dispatch<React.SetStateAction<number>>;
}> = ({ hasReport, setHasReport, setReportLength }) => {
  const handleHasReportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setHasReport(checked);
    if (!checked) {
      setReportLength(0);
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path>
          <path d="M18 14v4h4"></path>
          <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path>
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
          <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M8 11h4"></path>
          <path d="M8 15h3"></path>
        </svg>
        <label htmlFor="hasReport" className="mr-2">
          レポート提出の有無
        </label>
      </div>
      <input
        type="checkbox"
        id="hasReport"
        checked={hasReport}
        onChange={handleHasReportChange}
        className="border border-gray-300 rounded bg-gray-50 text-yellow-500 focus:ring-3 focus:ring-yellow-300"
      />
    </div>
  );
};

export default HasReport;
