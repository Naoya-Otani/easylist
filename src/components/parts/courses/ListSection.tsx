import React from "react";

const ListSection = () => {
	return (
		<ol className="list-none font-notoSans font-semibold px-2">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['1']">
				クラスごとに指定されている授業である必修や語学を時間割を見ながら埋める
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['2']">
				事前エントリーなどで自分で選べる授業である語学を埋める
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['3']">
				自分で選べる授業である選択必修を埋める
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['4']">
				空きコマを中心に一般教養や体育を埋める
			</li>
		</ol>
	);
};

export default ListSection;
