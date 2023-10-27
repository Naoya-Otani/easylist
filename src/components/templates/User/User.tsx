import { useSession } from "next-auth/react";
import useUser from "@/src/hooks/useUser";
import React from "react";

import Link from "next/link";
import Loading from "../../parts/common/Loading";
import ErrorPage from "../Errors/ErrorPage";
import Profile from "../../parts/user/Profile";
import PostedReviews from "../../parts/user/PostedReviews";

const User = () => {
  const { data: session, status } = useSession();
  const uid = session?.userId;
  const { user, error, isLoading } = useUser(uid);

  if (isLoading || status === "loading") {
    return <Loading />;
  }

  if (user) {
    return (
      <div className="outlineStyle font-notoSans flex flex-col items-center gap-y-12 md:gap-y-16">
        <h1 className="text-center text-3xl font-bold my-16">マイページ</h1>
        <Profile user={user} />
        <PostedReviews user={user} />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorPage
        errorCode={null}
        errorMessage={"ユーザーを取得できませんでした。"}
      />
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Link
          href={"/auth/signin"}
          className="font-semibold hover:text-blue-500"
        >
          ログインしましょう
        </Link>
      </div>
    );
  }
  return <div>ユーザーが見つかりませんでした</div>;
};

export default User;
