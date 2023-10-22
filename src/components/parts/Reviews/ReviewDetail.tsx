import React, { FC, useState, useEffect } from "react";
import { getWindowSize } from "@/src/hooks/getWindowSize";

const ReviewDetail: FC<{
  detail: string | null;
}> = ({ detail }) => {
  const [expanded, setExpanded] = useState(false);
  const { width } = getWindowSize();
  const mediumScreenSize = 768;
  const maxStrLength = width < mediumScreenSize ? 190 : 320;

  const isOver = detail && detail.length > maxStrLength;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderDetail = () => {
    if (!detail) {
      return <p></p>;
    }
    if (!isOver) {
      return <p>{detail}</p>;
    }
    if (isOver && !expanded) {
      const slicedDetail = detail.slice(0, maxStrLength);
      return (
        <p>
          {slicedDetail}{" "}
          <span
            className="text-gray-500 text-xs md:text-sm"
            onClick={toggleExpanded}
          >
            続きを読む
          </span>
        </p>
      );
    }
    if (isOver && expanded) {
      return (
        <p>
          {detail}{" "}
          <span
            className="text-gray-500 text-xs md:text-sm"
            onClick={toggleExpanded}
          >
            折りたたむ
          </span>
        </p>
      );
    }
  };

  return <>{renderDetail()}</>;
};

export default ReviewDetail;
