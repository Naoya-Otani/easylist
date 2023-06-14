import React, { FC } from "react";
import { Review } from "@prisma/client";

const HasAttendance: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const attendanceCount = reviews.reduce((count, review) => {
    return review.attendance ? count + 1 : count;
  }, 0);

  const hasMoreAttendance =
    reviews.length > 0 && attendanceCount > reviews.length / 2;

  const text =
    reviews.length > 0
      ? hasMoreAttendance
        ? "出席有り"
        : "出席無し"
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
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
        <path d="M15 19l2 2l4 -4"></path>
      </svg>
      <span>{text}</span>
    </div>
  );
};

export default HasAttendance;
