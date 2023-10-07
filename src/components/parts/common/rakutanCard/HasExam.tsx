import React, { FC } from "react";

const HasExam: FC<{ agg_hasExam: boolean; count_reviews: number }> = ({
  agg_hasExam,
  count_reviews,
}) => {
  let text;

  if (agg_hasExam === true) {
    text = "テストあり";
  } else if (count_reviews > 0 && agg_hasExam === false) {
    text = "テストなし";
  } else {
    text = "情報がありません";
  }

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
