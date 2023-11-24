import React from "react";
import Image from "next/image";

const NoReviews = () => {
  return (
    <>
      <Image
        src={"/no-reviews.svg"}
        alt="レビューなし"
        width={675.03315}
        height={423.65484}
        className="w-[50%] md:w-[300px] lg:w-[420px] block mx-auto my-8 pointer-events-none"
      />
      <p className="text-center text-lg mt-4">口コミがまだありません…</p>
    </>
  );
};

export default NoReviews;
