import React from "react";

const AboutCourseList = () => {
	return (
		<ol className="list-none font-notoSans font-semibold p-4">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full before:top-[50%] before:translate-y-[-50%] before:content-['1']">
				皆様の回答情報をもとに授業の特徴を分析しているため、実際の授業方式と異なる場合があります
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full before:top-[50%] before:translate-y-[-50%] before:content-['2']">
				各種授業情報の閲覧は、下記のログイン無しでも可能です
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full before:top-[50%] before:translate-y-[-50%] before:content-['3']">
				授業の口コミ投稿にはGoogle(Keio.jp)アカウントのログインが必要です
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full before:top-[50%] before:translate-y-[-50%] before:content-['4']">
				各授業のページから公式のシラバスを確認することができます
			</li>
		</ol>
	);
};

export default AboutCourseList;
