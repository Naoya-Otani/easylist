import { useSession } from "next-auth/react";
import React from "react";
import LogOutBtn from "./LogOutBtn";
import SignInBtn from "./SignInBtn";

const AuthBtn = () => {
	const { data: session } = useSession();
	if (session) {
		return <LogOutBtn />;
	}
	return <SignInBtn />;
};

export default AuthBtn;
