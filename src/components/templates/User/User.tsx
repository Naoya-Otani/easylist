import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "../../parts/common/Loading";
import PostedReviews from "../../parts/user/PostedReviews";
import Profile from "../../parts/user/Profile";

const User = async () => {
	const session = await auth();

	if (!session || !session.userId) {
		redirect("/signin");
	}

	return (
		<div className="outlineStyle font-notoSans flex flex-col items-center gap-y-12 md:gap-y-16">
			<h1 className="text-center text-3xl font-bold my-16">マイページ</h1>
			<Suspense fallback={<Loading />}>
				<Profile userId={session.userId} />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<PostedReviews userId={session.userId} />
			</Suspense>
		</div>
	);
};

export default User;
