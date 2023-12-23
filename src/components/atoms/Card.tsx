import React from "react";

type Props = {
  title: string;
  text: string;
  icon: React.ReactNode;
  navigationLink: React.ReactNode;
};

const Card = ({ title, text, icon, navigationLink }: Props) => {
  return (
    <div className="max-w-sm lg:max-w-lg min-h-[220px] mb-4 md:mb-0 p-6 bg-white border border-gray-200 rounded-lg shadow">
      {icon}
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mb-3 font-normal text-gray-500">{text}</p>
      {navigationLink}
    </div>
  );
};

export default Card;
