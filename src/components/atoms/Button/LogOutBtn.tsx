import React from "react";
import { signOut } from "next-auth/react";

const LogOutBtn = () => {
  return (
    <button
      className="font-notoSans rounded-md px-4 py-2 text-sm bg-yellow-500 text-white duration-300 hover:bg-yellow-600"
      onClick={() => signOut()}
    >
      ログアウト
    </button>
  );
};

export default LogOutBtn;
