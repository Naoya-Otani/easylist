import "@/styles/globals.css";
import { auth } from "@/auth.config";
import Footer from "@/src/components/templates/Footer";
import Header from "@/src/components/templates/Header";
import type { Metadata } from "next";
import { Gothic_A1, Noto_Sans_JP } from "next/font/google";
import type React from "react";
import { NextAuthProvider } from "../components/utils/NextAuthProvider";

const gothicA1 = Gothic_A1({
	weight: ["100", "200", "300", "400", "500"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-gothicA1",
});
const notoSansJP = Noto_Sans_JP({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-notoSansJP",
});

export const metadata: Metadata = {
	title: "慶應楽単リスト",
	description:
		"慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();
	return (
		<html lang="ja" className={`${gothicA1.variable} ${notoSansJP.variable}`}>
			<body>
				<main>
					<NextAuthProvider session={session}>
						<Header />
						{children}
						<Footer />
					</NextAuthProvider>
				</main>
			</body>
		</html>
	);
}
