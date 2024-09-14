import Policy from "@/src/components/templates/AboutUs/Policy";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "楽単リスト プライバシーポリシー",
	description: "楽単リストのプライバシーポリシーを明記したページです。",
};

const PolicyPage = () => {
	return <Policy />;
};

export default PolicyPage;
