import Link from "next/link";
import type React from "react";

interface ErrorPageProps {
	errorCode: number | null;
	errorMessage: string | null;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, errorMessage }) => {
	return (
		<div className="min-h-screen w-screen flex flex-col justify-center items-center">
			<h1 className="text-2xl text-gray-800 font-bold mb-8">
				{errorCode ? errorCode : "エラー"}
			</h1>
			<p className="text-base text-gray-500 mb-4">
				{errorMessage ? errorMessage : "エラーが発生しました"}
			</p>
			<Link
				href={"/"}
				className="text-base text-blue-500 hover:underline duration-300"
			>
				TOPに戻る
			</Link>
		</div>
	);
};

export default ErrorPage;
