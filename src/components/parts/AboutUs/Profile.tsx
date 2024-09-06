import React, { FC } from "react";
import Avatar from "../../atoms/Avatar";

const Profile: FC<{
  name: string;
  title: string;
  text: string;
  imgPath: string;
  link?: string;
}> = ({ name, title, text, imgPath, link }) => {
  const content = (
    <div className="flex flex-col justify-center items-center p-6 rounded-md border border-gray-300 w-[465px]">
      <div className="p-2">
        <Avatar srcPath={imgPath} />
        <p className="text-center mt-4 text-gray-800 font-medium">{name}</p>
        <p className="text-center mb-4 md:mb-0 text-gray-700">{title}</p>
      </div>
      <p className="max-w-[240px] text-center py-2">{text}</p>
    </div>
  );
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-slate-100 rounded-md w-max"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Profile;
