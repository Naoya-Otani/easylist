import Image from "next/image";
import React from "react";

const NoData = () => {
	return (
		<>
			<Image
				src={"/no-data.svg"}
				alt="授業情報なし"
				width={647.63626}
				height={632.17383}
				className="w-[50%] md:w-[300px] lg:w-[420px] block mx-auto my-8 pointer-events-none"
			/>
			<p className="text-center text-lg mt-4">授業情報がまだありません…</p>
		</>
	);
};

export default NoData;
