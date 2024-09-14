import Contact from "@/src/components/templates/Contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "お問い合わせ",
	description: "楽単リストへのお問い合わせページです",
};

const ContactPage = () => {
	return <Contact />;
};

export default ContactPage;
