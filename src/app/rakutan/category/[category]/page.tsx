import RakutanList from "@/src/components/templates/rakutan/RakutanList";
import type { Metadata } from "next";
import React from "react";

type Props = {
	params: { category: string };
};

const categoryTitleMap: { [key: string]: string } = {
	humanities: "人文・社会学",
	pe: "体育",
	online: "オンライン授業",
	nature: "自然科学",
};

export function generateMetadata({ params }: Props): Metadata {
	return {
		title: categoryTitleMap[params.category],
		description: `${categoryTitleMap[params.category]}のページです。`,
	};
}

const CategoryPage = ({ params }: Props) => {
	return (
		<RakutanList
			category={params.category}
			title={categoryTitleMap[params.category]}
		/>
	);
};

export default CategoryPage;
