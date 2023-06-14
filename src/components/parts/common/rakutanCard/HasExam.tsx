import React, { FC } from "react";
import { Review } from "@prisma/client";

const HasExam: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const examCount = reviews.reduce((count, review) => {
    return review.hasExam ? count + 1 : count;
  }, 0);

  const hasMoreExam = reviews.length > 0 && examCount > reviews.length / 2;

  const text =
    reviews.length > 0
      ? hasMoreExam
        ? "テスト有り"
        : "テスト無し"
      : "情報がありません";

  return (
    <div className="flex mb-2 text-gray-500">
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
      <span>{text}</span>
    </div>
  );
};

export default HasExam;
