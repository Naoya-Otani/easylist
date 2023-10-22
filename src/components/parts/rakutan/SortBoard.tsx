import React, { FC } from "react";
import AboutCourseList from "./AboutCourseList";
import Sorts from "./Sorts";

const SortBoard: FC<{
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}> = ({ sort, setSort }) => {
  return (
    <div className="lg:px-16 flex flex-col justify-center bg-yellow-50 p-8 rounded-lg mb-8 ">
      <div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-3 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-center text-2xl font-bold pb-[2px]">
            授業情報について
          </h2>
        </div>
        <AboutCourseList />
      </div>
      <div className="p-4 rounded-md">
        <div className="flex items-center text-gray-800 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <p className="pb-[2px]">並び替え</p>
        </div>
        <Sorts sort={sort} setSort={setSort} />
      </div>
    </div>
  );
};

export default SortBoard;
