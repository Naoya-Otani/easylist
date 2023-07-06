import React, { FC } from "react";
import Avatar from "../../atoms/Avatar";

const Profile: FC<{
  name: string;
  title: string;
  text: string;
  imgPath: string;
}> = ({ name, title, text, imgPath }) => {
  return (
    <div className="flex flex-col justify-center items-center p-6 rounded-md border border-gray-300 w-[465px]">
      <div className="p-2">
        <Avatar srcPath={imgPath} />
        <p className="text-center mt-4 text-gray-800 font-medium">{name}</p>
        <p className="text-center mb-4 md:mb-0 text-gray-700">{title}</p>
      </div>
      <p className="max-w-[240px] text-center py-2">{text}</p>
    </div>
  );
};

export default Profile;
