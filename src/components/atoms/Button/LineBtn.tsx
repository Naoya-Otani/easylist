import Image from "next/image";
import type React from "react";

const LineBtn: React.FC<{ url: string; title: string }> = ({ url, title }) => {
	return (
		<a
			href={`https://social-plugins.line.me/lineit/share?url=${url}&text=${title}`}
			className="hover:opacity-80 duration-200"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={"/social/line.png"}
				width={32}
				height={32}
				alt="xのロゴ"
				className="w-8"
			/>
		</a>
	);
};

export default LineBtn;
