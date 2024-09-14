import type { Metadata } from "next";
import Index from "../components/templates/Index";

export const metadata: Metadata = {
	title: "慶應楽単リスト",
	description:
		"慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。",
};

export default function Page() {
	return <Index />;
}
