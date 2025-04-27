import React from "react";

const ListEcon = () => {
	return (
		<ol className="list-none font-notoSans font-semibold px-2">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['1']">
				総合教育科目（一般教養）
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['2']">
				卒業単位認定科目
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['3']">
				特殊科目（金融リテラシー・インバウンドビジネス観光創造論）
			</li>
		</ol>
	);
};

export default ListEcon;
