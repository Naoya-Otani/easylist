import Economics from "@/src/components/templates/courses/Economics";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "経済学部 履修の組み方",
	description: "経済学部の履修の組み方をまとめたページです",
};

const EconomicsPage = () => {
	return <Economics />;
};

export default EconomicsPage;
