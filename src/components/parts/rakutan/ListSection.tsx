import React from "react";

const ListSection = () => {
	return (
		<ol className="list-none font-notoSans font-semibold p-4">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['1']">
				オンデマンド / リアルタイム / 対面
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['2']">
				出欠確認の有無
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['3']">
				レポートの有無
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['4']">
				テストの難易度と持ち込み可否
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['5']">
				単位判定の甘さ
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['6']">
				教授の話は分かりやすいか
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['7']">
				授業で扱う内容
			</li>
		</ol>
	);
};

export default ListSection;
