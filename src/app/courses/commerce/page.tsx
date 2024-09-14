import Commerce from "@/src/components/templates/courses/Commerce";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "商学部 履修の組み方",
	description: "商学部の履修の組み方をまとめたページです",
};

const CommercePage = () => {
	return <Commerce />;
};

export default CommercePage;
