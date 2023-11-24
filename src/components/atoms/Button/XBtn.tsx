import React from "react";
import Image from "next/image";

const XBtn: React.FC<{ encodedUrl: string; encodedTitle: string }> = ({
  encodedUrl,
  encodedTitle,
}) => {
  return (
    <a
      href={`https://twitter.com/share?url=${encodedUrl}&text=${encodedTitle}&hashtags=慶應楽単リスト`}
      className="hover:opacity-80 duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={"/social/x.svg"}
        width={300}
        height={271}
        alt="xのロゴ"
        className="w-8"
      />
    </a>
  );
};

export default XBtn;
