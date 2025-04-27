import Lawpolitics from "@/src/components/templates/courses/Lawpolitics";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "法学部政治学科 履修の組み方",
	description: "法学部政治学科の履修の組み方をまとめたページです",
};

const LawpoliticsPage = () => {
	return <Lawpolitics />;
};

export default LawpoliticsPage;
