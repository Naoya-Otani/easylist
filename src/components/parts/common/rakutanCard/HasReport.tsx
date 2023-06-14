import React, { FC } from "react";
import { Review } from "@prisma/client";

const HasReport: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const reportCount = reviews.reduce((count, review) => {
    return review.hasReport ? count + 1 : count;
  }, 0);

  const hasMoreReports = reviews.length > 0 && reportCount > reviews.length / 2;

  const text =
    reviews.length > 0
      ? hasMoreReports
        ? "レポート有り"
        : "レポート無し"
      : "情報がありません";

  return (
    <div className="flex mb-2 mt-4 text-gray-500">
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
      <span>{text}</span>
    </div>
  );
};

export default HasReport;
