import AboutUs from "@/src/components/templates/AboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "楽単リスト 運営チーム",
	description: "楽単リストの運営チームの紹介ページです",
};

const AboutUsPage = () => {
	return <AboutUs />;
};

export default AboutUsPage;
