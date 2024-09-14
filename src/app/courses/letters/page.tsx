import Letters from "@/src/components/templates/courses/Letters";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "文学部 履修の組み方",
	description: "文学部の履修の組み方をまとめたページです",
};

const LettersPage = () => {
	return <Letters />;
};

export default LettersPage;
