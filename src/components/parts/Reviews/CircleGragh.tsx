import React, { FC } from "react";
import { Review } from "@prisma/client";

const CircleGragh: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const AtdtrueCount = reviews.filter((review) => review.attendance).length;
  const RpttrueCount = reviews.filter((review) => review.hasReport).length;
  const ExmtrueCount = reviews.filter((review) => review.hasExam).length;
  const BkstrueCount = reviews.filter(
    (review) => review.allowedCheatsheet
  ).length;
  const calculatePercentage = (count: number, total: number) => {
    if (total === 0) return 0;
    const percentage = (count / total) * 100;
    return Math.ceil(percentage);
  };
  const AtttruePercentage = calculatePercentage(AtdtrueCount, reviews.length);
  const RpttruePercentage = calculatePercentage(RpttrueCount, reviews.length);
  const ExmtruePercentage = calculatePercentage(ExmtrueCount, reviews.length);
  const BkstruePercentage = calculatePercentage(BkstrueCount, reviews.length);
  return (
    <div className="md:flex flex-wrap justify-center mt-8 md:gap-8 text-gray-500">
      <div className="mb-8 md:mb-0 border border-gray-200 rounded-lg shadow p-4">
        <div
          className="flex justify-center items-center w-[280px] h-[280px] rounded-full mb-4"
          style={{
            backgroundImage: `radial-gradient(#ffffff 60%, transparent 61%), conic-gradient(#eab308 0% ${AtttruePercentage}%, #fefce8 ${AtttruePercentage}% 100%)`,
          }}
        >
          <p className="text-3xl font-bold">{AtttruePercentage}%</p>
        </div>
        <div className="flex justify-center">
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
          <p className="text-center">出席有りと答えた人</p>
        </div>
      </div>
      <div className="mb-8 md:mb-0 border border-gray-200 rounded-lg shadow p-4">
        <div
          className="flex justify-center items-center w-[280px] h-[280px] rounded-full mb-4"
          style={{
            backgroundImage: `radial-gradient(#ffffff 60%, transparent 61%), conic-gradient(#eab308 0% ${RpttruePercentage}%, #fefce8 ${RpttruePercentage}% 100%)`,
          }}
        >
          <p className="text-3xl font-bold">{RpttruePercentage}%</p>
        </div>
        <div className="flex justify-center">
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
          <p className="text-center">レポート有りと答えた人</p>
        </div>
      </div>
      <div className="mb-8 md:mb-0 border border-gray-200 rounded-lg shadow p-4">
        <div
          className="flex justify-center items-center w-[280px] h-[280px] rounded-full mb-4"
          style={{
            backgroundImage: `radial-gradient(#ffffff 60%, transparent 61%), conic-gradient(#eab308 0% ${ExmtruePercentage}%, #fefce8 ${ExmtruePercentage}% 100%)`,
          }}
        >
          <p className="text-3xl font-bold">{ExmtruePercentage}%</p>
        </div>
        <div className="flex justify-center">
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
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
            <path d="M7 10l2 2l4 -4"></path>
          </svg>
          <p className="text-center">試験有りと答えた人</p>
        </div>
      </div>
      <div className="mb-8 md:mb-0 border border-gray-200 rounded-lg shadow p-4">
        <div
          className="flex justify-center items-center w-[280px] h-[280px] rounded-full mb-4"
          style={{
            backgroundImage: `radial-gradient(#ffffff 60%, transparent 61%), conic-gradient(#eab308 0% ${BkstruePercentage}%, #fefce8 ${BkstruePercentage}% 100%)`,
          }}
        >
          <p className="text-3xl font-bold">{BkstruePercentage}%</p>
        </div>
        <div className="flex justify-center">
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
          <p className="text-center">持ち込み有りと答えた人</p>
        </div>
      </div>
    </div>
  );
};

export default CircleGragh;
