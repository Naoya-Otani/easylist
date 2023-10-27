import React from "react";
import SignInBtn from "./SignInBtn";
import LogOutBtn from "./LogOutBtn";
import { useSession } from "next-auth/react";

const AuthBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return <LogOutBtn />;
  }
  return <SignInBtn />;
};

export default AuthBtn;
