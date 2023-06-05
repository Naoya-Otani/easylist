import React, { FC } from "react";

const Avatar: FC<{ srcPath: string }> = ({ srcPath }) => {
  return (
    <img
      className="rounded w-36 h-36 aspect-square object-cover block mx-auto pointer-events-none"
      src={srcPath}
    />
  );
};

export default Avatar;
