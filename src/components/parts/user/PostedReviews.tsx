import type { User } from "@/src/@types/user";
import React from "react";
import useReviewsWithUserId from "@/src/hooks/useReviewsWithUserId";
import formatDate from "@/lib/formatDate";

import Link from "next/link";
import Loading from "../common/Loading";
import ErrorPage from "../../templates/Errors/ErrorPage";
import StarReview from "@/src/components/parts/Reviews/StarReview";
import ReviewMenu from "@/src/components/parts/Reviews/ReviewMenu";
import ReviewDetail from "@/src/components/parts/Reviews/ReviewDetail";

type Props = {
  userId: string;
};

const PostedReviews = ({ userId }: Props) => {
  const { data, isError, isLoading } = useReviewsWithUserId(userId);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <ErrorPage
        errorCode={null}
        errorMessage={"投稿を取得できませんでした。"}
      />
    );
  }
  if (!data || data.length === 0) {
    return <div>投稿はありません</div>;
  }

  let positionFromRight = 0;
  if (data.length < 5) {
    positionFromRight = 100 - data.length * 20;
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">投稿した口コミ</h2>
      <div className="flex flex-col items-center my-10 md:my-12">
        <div className="mb-4 relative w-[70%] h-6 bg-yellow-100 rounded-lg">
          <div
            className={`absolute bg-yellow-400 ${
              positionFromRight == 0
                ? "inset-0 rounded-lg"
                : `top-0 bottom-0 left-0 right-[${positionFromRight}%] rounded-l-lg`
            }`}
          ></div>
          <span className="absolute top-0 left-0 translate-x-[-200%] leading-6 text-gray-500 text-lg font-semibold">
            0
          </span>
          <span className="absolute top-0 right-0 translate-x-[200%] leading-6 text-gray-500 text-lg font-semibold">
            5
          </span>
        </div>
        <span className="text-center text-xl mb-6 font-bold">
          {data.length} 個
        </span>
        <p className="px-2 tracking-wide text-gray-900 text-sm md:text-base">
          5個口コミ投稿をしてくれた方は、
          <br className="md:hidden" />
          過去問版楽単リストを閲覧することができます!
          <br />
          公開まで今しばらくお待ちください!
        </p>
      </div>
      {data.map((review) => {
        const date = new Date(review.createdAt);
        return (
          <div
            className="p-4 mb-4 border rounded-md border-gray-200"
            key={review.id}
          >
            <div className="relative mb-2">
              <Link
                href={`/rakutan/${review.course.id}`}
                className="flex flex-wrap gap-x-3 duration-200 hover:underline hover:text-blue-500 w-fit"
              >
                <p className="font-semibold">{review.course.locationName}</p>
                <p>{review.course.subjectName}</p>
              </Link>
              <ReviewMenu
                reviewId={review.id}
                userId={review.userId}
                courseId={review.courseId}
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <StarReview rating={review.reputation} />
                </div>
                <p className="text-gray-500 leading-5 pb-[2px]">
                  {formatDate(date)}
                </p>
              </div>
              <ReviewDetail detail={review.detail} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostedReviews;
