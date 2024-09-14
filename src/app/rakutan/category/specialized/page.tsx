import Specialized from "@/src/components/templates/rakutan/specialized/Specialized";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "専門科目・第二外国語",
	description: "専門科目・第二外国語を検索するページです。",
};

const SpecializedPage = () => {
	return <Specialized />;
};

export default SpecializedPage;
