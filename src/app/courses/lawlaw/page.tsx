import Lawlaw from "@/src/components/templates/courses/Lawlaw";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "法学部学科 履修の組み方",
	description: "法学部学科の履修の組み方をまとめたページです",
};

const LawlawPage = () => {
	return <Lawlaw />;
};

export default LawlawPage;
