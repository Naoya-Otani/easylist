import NavLink from "@/src/components/parts/common/NavLink";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="outlineStyle font-notoSans flex flex-col items-center ">
			<Image
				src="/404.svg"
				alt="404"
				width={860.13137}
				height={571.14799}
				className="w-[400px] pointer-events-none"
			/>
			<p className="text-center text-lg text-gray-500 mt-8">
				ページが見つかりませんでした
			</p>
			<div className="flex justify-center">
				<NavLink href="/" text="サイトトップに戻る" />
			</div>
		</div>
	);
}
