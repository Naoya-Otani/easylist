import React from "react";
import Heading from "../../parts/common/Heading";
import HeadingSm from "../../parts/common/HeadingSm";
import Table from "../../parts/common/Table";
import Table4col from "../../parts/common/Table4col";

const Letters = () => {
	return (
		<div className="outlineStyle font-notoSans">
			<div className="my-8">
				<Heading heading="履修の組み方　文学部" />
			</div>
			<div className="mb-6">
				<div className="my-4">
					<HeadingSm heading="進級条件" />
				</div>
				<p className="text-black mb-8 px-4 text-sm">
					以下は、英語を履修する一般的な1年生を想定しています！
					まずは、2年生への進級条件から確認してみましょう。
					例に挙げるフランス語は、皆さんの履修する第二外国語に置き換えて確認してください。
				</p>
				<Table
					head={["科目", "最低単位数"]}
					items={[
						{ th: "英語", td: "2単位以上" },
						{ th: "フランス語", td: "4単位以上" },
						{ th: "総合教育科目(一般教養)", td: "16単位以上" },
					]}
					thBold={false}
				/>
			</div>
			<div className="mb-6">
				<div className="my-4">
					<HeadingSm heading="語学　第二外国語" />
				</div>
				<p className="text-black mb-8 px-4 text-sm">
					さて、履修を組んでいきましょう！クラスが発表されないと履修は組めません。クラスが発表されたら、文1年の
					<a
						href="https://www.students.keio.ac.jp/hy/class/registration/"
						className="anchor"
						target="_blank"
						rel="noopener noreferrer"
					>
						時間割
					</a>
					の3ページを見れば、第二外国語の授業が分かります。第二外国語はクラスで受けます。ようするに、週3で第2外国語があります。
				</p>
				<Table4col
					head={["春学期", "秋学期", "備考", "教員"]}
					items={[
						{
							th: "フランス語 Ⅰ (A)",
							td1: "フランス語 Ⅱ (A)",
							td2: "初級文法",
							td3: "日本人",
						},
						{
							th: "フランス語 Ⅰ (B)",
							td1: "フランス語 Ⅱ (B)",
							td2: "初級文法",
							td3: "日本人",
						},
						{
							th: "フランス語 Ⅰ (C)",
							td1: "フランス語 Ⅱ (C)",
							td2: "会話",
							td3: "フランス人",
						},
					]}
				/>
			</div>
			<div className="mb-6">
				<div className="my-4">
					<HeadingSm heading="語学　英語" />
				</div>
				<p className="text-black mb-8 px-4 text-sm">
					次に英語ですね。英語は90分で50点満点のプレイスメントテストの結果でレベルが、
					「基礎」・「中級」・「中級発展」・「上級」・「最上級」に分類されます。
					指定されたレベルから、２つの先生を自由に事前エントリーで選びます。楽単リストを活用してください。週２で英語があります。
				</p>
				<Table
					head={["春学期", "秋学期"]}
					items={[
						{ th: "英語 Ⅰ 中級 ", td: "英語 Ⅱ 中級" },
						{ th: "英語 Ⅰ 中級", td: "英語 Ⅱ 中級" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm">
					楽単リストによる2021年度の英語プレイスメントテストの分布
				</p>
				<Table
					head={["点数", "人数"]}
					items={[
						{ th: "1 - 5", td: "1名" },
						{ th: "6 - 10", td: "0名" },
						{ th: "11 - 15", td: "0名" },
						{ th: "16 - 20", td: "5名" },
						{ th: "21 - 25", td: "8名" },
						{ th: "26 - 30", td: "31名" },
						{ th: "31 - 35", td: "61名" },
						{ th: "36 - 40", td: "78名" },
						{ th: "41 - 45", td: "27名" },
						{ th: "46 - 50", td: "2名" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm">
					必修は以上の語学10単位のみです。あとは、俗に一般教養と呼ばれる総合教育科目のみです。なので、文学部１年は語学さえ頑張れば、自由度の高いキャンパスライフを送ることができます。
				</p>
			</div>
			<div className="mb-6">
				<div className="my-4">
					<HeadingSm heading="一般教育科目" />
				</div>
				<p className="text-black my-8 px-4 text-sm">
					さて、一般教養なのですが、卒業するまでに38単位以上履修しなければならなりません。2年以降を過ごす三田では、あまり一般教養は開講されていません。そのため、日吉にいる1年の間に38単位取得することが一般的です。おさらいすると、1年文学部の履修申告の上限は52単位だから、語学10単位と一般教養を38単位取得したいことを考えると、52-(10+38)=52-48=4単位しか、一般教養を落単する余裕がありません。語学10単位含めて、計48単位以上で三田に行ければ最高です。ちなみに、それ以上履修しても無駄になります。
					繰り返しますが、一般教養は自由に先生を選べるので、
					<span className="font-bold"> 楽単リストが非常に有効 </span>
					です。実は楽単リストは文学部のためにあるといっても過言ではありません。
					<br />
					38単位の内訳をみていきましょう。何がどの系列かは文1年の時間割・履修案内を閲覧してください。各系列から何単位以上と決まっています。基礎情報処理は系列外科目にあたります。
				</p>
				<Table
					head={["系列", "最低必要単位数"]}
					items={[
						{ th: "人文科学系列", td: "8単位以上" },
						{ th: "社会科学系列", td: "8単位以上" },
						{ th: "自然科学系列", td: "8単位以上" },
						{ th: "系列外科目", td: "無し" },
						{ th: "合計", td: "38単位以上" },
					]}
					thBold={false}
				/>
			</div>
		</div>
	);
};

export default Letters;
