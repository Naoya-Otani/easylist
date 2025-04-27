import SignInBtnServer from "@/src/components/atoms/Button/SignInBtnServer";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "サインインページ",
};

export default function SigninPage() {
	return (
		<>
			<div className="font-notoSans w-screen h-screen flex justify-center items-center">
				<div className="flex flex-col justify-center items-center gap-y-6 lg:gap-y-8">
					<div className="flex items-center mx-auto font-gothicA1">
						<img
							src="/icon-easylist.svg"
							alt="logo icon"
							className="w-7 h-7 mr-4 md:mr-6"
						/>
						<p className="font-bold tracking-widest mr-2 text-2xl">KEIO</p>
						<p className="font-extralight tracking-widest text-2xl">EASYLIST</p>
					</div>
					<p className="text-gray-500 text-xs lg:text-base mb-4">
						慶應楽単リストは授業情報が集まるサイトです。
						<br />
						皆様の口コミによってより良いサイトになっています。
					</p>
					<div className="w-60 h-14 py-2 px-3 bg-yellow-100 rounded-lg flex justify-center items-center hover:bg-yellow-200 duration-300">
						<SignInBtnServer />
					</div>
					<p className="text-gray-500 text-xs lg:text-base">
						<Link
							href="/aboutus/policy"
							className="underline hover:text-blue-500 hover:no-underline"
						>
							プライバシーポリシー
						</Link>
						に同意したうえでご利用ください。
					</p>
				</div>
			</div>
		</>
	);
}
