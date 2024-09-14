import Result from "@/src/components/templates/rakutan/specialized/Result";
import type { Metadata } from "next";
import React from "react";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ searchParams }: Props): Metadata {
	const faculty = Array.isArray(searchParams.faculty)
		? searchParams.faculty[0]
		: searchParams.faculty;
	const lang = Array.isArray(searchParams.lang)
		? searchParams.lang[0]
		: searchParams.lang;
	return {
		title: `${faculty}学部 ${lang}の検索結果`,
		description: `${faculty}学部で開講されている${lang}の授業一覧ページです。`,
	};
}

const SpecializedRakutanResultPage = ({ searchParams }: Props) => {
	const faculty = Array.isArray(searchParams.faculty)
		? searchParams.faculty[0]
		: searchParams.faculty;
	const lang = Array.isArray(searchParams.lang)
		? searchParams.lang[0]
		: searchParams.lang;

	if (typeof faculty !== "string" || typeof lang !== "string") {
		return <div>有効でない検索結果です。</div>;
	}

	return <Result faculty={faculty} lang={lang} />;
};

export default SpecializedRakutanResultPage;
