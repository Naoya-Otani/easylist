import { FC } from "react";

const HeadingSm: FC<{ heading: string }> = ({ heading }) => {
  return (
    <h2 className="py-1 px-2 bg-transparent border border-solid border-l-yellow-200 border-y-0 border-r-0 border-l-8 lg:text-lg">
      {heading}
    </h2>
  );
};

export default HeadingSm;
