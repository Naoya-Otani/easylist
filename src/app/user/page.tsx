import User from "@/src/components/templates/User/User";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "マイページ - 慶應楽単リスト",
	description:
		"慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。",
};

const UserPage = () => {
	return <User />;
};

export default UserPage;
