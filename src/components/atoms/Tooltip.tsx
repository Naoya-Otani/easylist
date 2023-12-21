import React from "react";

type Props = {
  text: string;
  icon: React.ReactNode;
};

const Tooltip = ({ text, icon }: Props) => {
  return (
    <span className="relative group">
      <span className="text-sm md:text-base z-50 whitespace-nowrap rounded bg-white px-2 py-1 text-black border border-yellow-500 absolute -top-10 left-[100%] md:left-1/2 -translate-x-1/2 before:content-[''] before:absolute before:-translate-x-1/2 before:left-[40%] md:before:left-1/2 before:top-full before:border-4 before:border-transparent before:border-t-yellow-500 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        {text}
      </span>
      {icon}
    </span>
  );
};

export default Tooltip;
