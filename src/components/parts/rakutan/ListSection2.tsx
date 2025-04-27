const ListSection2 = () => {
	return (
		<ol className="list-none font-notoSans font-semibold p-4">
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['1']">
				Cが取りやすいのか、高成績を取りやすいのか
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['2']">
				授業は分かりやすく面白いのか？
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['3']">
				出欠確認はなく，授業をきっても大丈夫な進度なのか？
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['4']">
				テストはあるのか？持ち込み可なのか？
			</li>
			<li className="relative py-[7px] pr-[5px] pl-10 mt-[7px] mb-[10px] text-sm border-b border-dashed border-yellow-500 before:absolute before:left-0 before:w-[25px] before:h-[25px] before:text-center before:text-black before:bg-yellow-200 before:rounded-full top-[50%] before:content-['5']">
				数学を使うのか？（論理学など）英語を使うのか？（ビジネス系など）
			</li>
		</ol>
	);
};

export default ListSection2;
