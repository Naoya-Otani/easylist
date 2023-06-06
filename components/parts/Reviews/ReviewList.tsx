import React, { FC, useState, useEffect } from "react";
import { Review } from "@prisma/client";
import StarReview from "./StarReview";
import ReviewMenu from "./ReviewMenu";
import { useSession } from "next-auth/react";

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year} ${month}/${day}`;
}

const ReviewList: FC<{
  reviews: Review[];
}> = ({ reviews }) => {
  const { data: session } = useSession();

  return (
    <div>
      {reviews.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`p-4 mb-4 border rounded-md border-gray-200 ${
              index === 0 ? "mt-4" : ""
            }`}
          >
            <div className="flex justify-end relative">
              <ReviewMenu reviewId={item.id} userId={item.userId} />
            </div>
            <div className="flex items-center mb-2">
              <div className="mr-2">
                <StarReview rating={item.reputation} />
              </div>
              <p className="text-gray-500 leading-5 pb-[2px]">
                {formatDate(item.createdAt)}
              </p>
            </div>
            <p>{item.detail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
