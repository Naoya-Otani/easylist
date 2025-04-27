import Science from "@/src/components/templates/courses/Science";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "理工学部 履修の組み方",
	description: "理工学部の履修の組み方をまとめたページです",
};

const SciencePage = () => {
	return <Science />;
};

export default SciencePage;
