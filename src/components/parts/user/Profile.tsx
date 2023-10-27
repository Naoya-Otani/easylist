import type { User } from "@/src/@types/user";
import React from "react";
import EmailIcon from "@/src/components/atoms/icon/EmailIcon";

const Profile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold mb-8">プロフィール</h2>
      <div className="flex justify-center items-center gap-x-2 mx-auto">
        <p>Email</p>
        <EmailIcon />
        <span className="text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default Profile;
