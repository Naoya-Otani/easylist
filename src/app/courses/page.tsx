import Course from "@/src/components/templates/courses/Course";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "履修の組み方 概要",
	description: "履修の組み方の概要ページです",
};

const CoursesSummaryPage = () => {
	return <Course />;
};

export default CoursesSummaryPage;
