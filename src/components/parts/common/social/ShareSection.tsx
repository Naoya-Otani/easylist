import React from "react";
import LineBtn from "@/src/components/atoms/Button/LineBtn";
import XBtn from "@/src/components/atoms/Button/XBtn";

const ShareSection: React.FC<{
  id: number;
  professor: string;
  subject: string;
}> = ({ id, professor, subject }) => {
  if (process.env.NEXT_PUBLIC_BASE_URL === undefined) return <></>;
  const url = `${encodeURIComponent(
    process.env.NEXT_PUBLIC_BASE_URL
  )}/rakutan/${id}`;
  const title = `${encodeURIComponent(professor)} ${encodeURIComponent(
    subject
  )}の授業情報を見るならこちら！%0a%0a`;

  return (
    <div className="px-4 lg:px-16 flex justify-end">
      <div className="flex justify-center items-center w-fit gap-3 border-b-4 border-b-yellow-300 bg-yellow-50 py-2 px-4 rounded-t-md">
        <p>友達にシェア</p>
        <XBtn encodedUrl={url} encodedTitle={title} />
        <LineBtn url={url} title={title} />
      </div>
    </div>
  );
};

export default ShareSection;
