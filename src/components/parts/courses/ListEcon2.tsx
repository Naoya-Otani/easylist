import React from "react";

const ListEcon2 = () => {
	return (
		<ol className="list-none font-notoSans font-semibold px-2">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['1']">
				特殊科目（簿記・確率論入門・解析学入門・金融リテラシーなど）
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['2']">
				関連科目（他学部の専門科目 4単位まで）
			</li>
		</ol>
	);
};

export default ListEcon2;
