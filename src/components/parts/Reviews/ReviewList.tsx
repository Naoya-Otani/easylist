import React, { FC } from "react";
import { Review } from "@prisma/client";
import StarReview from "./StarReview";
import ReviewMenu from "./ReviewMenu";
import ReviewDetail from "./ReviewDetail";
import formatDate from "@/lib/formatDate";

const ReviewList: FC<{
  reviews: Review[];
}> = ({ reviews }) => {
  return (
    <>
      {reviews.map((item, index) => {
        const date = new Date(item.createdAt);
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
                {formatDate(date)}
              </p>
            </div>
            <ReviewDetail detail={item.detail} />
          </div>
        );
      })}
    </>
  );
};

export default ReviewList;
