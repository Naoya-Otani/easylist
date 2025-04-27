import React from "react";
import Heading from "../../parts/common/Heading";
import HeadingSm from "../../parts/common/HeadingSm";
import HeadingXs from "../../parts/common/HeadingXs";
import Table from "../../parts/common/Table";
import Table3col from "../../parts/common/Table3col";

const Lawlaw = () => {
	return (
		<div className="outlineStyle font-notoSans">
			<div className="my-8">
				<Heading heading="履修の組み方　法学部法学科" />
			</div>
			<div className="mb-4">
				<div className="my-4">
					<HeadingSm heading="進級条件" />
				</div>
				<Table3col
					head={["学年", "該当学年単位数", "累計単位数"]}
					items={[
						{
							th: "1年",
							td1: "30単位以上",
							td2: " - ",
						},
						{
							th: "2年",
							td1: "30単位以上",
							td2: " - ",
						},
						{
							th: "3年",
							td1: "30単位以上",
							td2: " - ",
						},
						{
							th: "4年",
							td1: " - ",
							td2: "136単位以上",
						},
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					法学部法学科の進級条件は至ってシンプルで、毎年30単位以上取って、卒業時には136単位以上取ればいいだけです。ただし、理由は後述しますが、1年生は44～48単位申請が基本となるでしょう。
					※インテンシブは48～52単位申請が基本です。
					では、履修組み始めていきます。クラスが発表されないと新入生は履修が組めません！まずはクラスごとに授業が指定されている必修から埋めていきます。クラス指定の授業は法学部法律学科１年の
					<a
						href="https://www.students.keio.ac.jp/hy/class/registration/"
						className="anchor"
						target="_blank"
						rel="noopener noreferrer"
					>
						時間割
					</a>
					を閲覧すると分かるかと思います。
				</p>
				<div className="my-4">
					<HeadingXs heading="必修" />
				</div>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					○の中の数字は単位数です。
				</p>
				<Table
					head={["春学期", "秋学期"]}
					items={[
						{
							th: "社会科学科目 ②",
							td: " - ",
						},
						{ th: "法学 Ⅰ ②", td: "法学 Ⅱ ②" },
						{ th: "外国語 1", td: " - " },
						{ th: "英語第Ⅰ ①", td: "英語第Ⅰ ①" },
						{ th: "外国語 2", td: " - " },
						{
							th: "フランス語第Ⅰ（週2コマ） ②",
							td: "フランス語第Ⅰ（週2コマ） ②",
						},
						{ th: "法律学科目（導入科目）", td: " - " },
						{ th: "憲法（総論・人権） Ⅰ ②", td: "憲法（総論・人権） Ⅱ ②" },
						{ th: "民法（総論） Ⅰ ②", td: "民法（総論） Ⅱ ②" },
						{ th: "刑法（総論） Ⅰ ②", td: "刑法（総論） Ⅱ ②" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					上記の授業はクラスによって先生が指定されています。よく、「法法前半・法法後半って何？」という質問が寄せられます。前半はA組～K組のことで、後半はL～U組のことです。憲法・民法・刑法において、法法前半は法法前半の全員が同じ授業、法法後半は法法後半の全員が同じ授業を受けます。従って、味方も多いことから、法律系サークルではその科目のシケタイ（試験対策）が出回ります。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					さて、次に事前エントリーして決めないといけないのは、英語第Ⅱです。英語第Ⅱは第Ⅰと違って先生を選ぶことが可能で、基本は通年で先生が一緒です。楽単リストをうまく活用して楽な先生を選んで欲しいと思います
					。
				</p>
				<Table
					head={["春学期", "秋学期"]}
					items={[
						{ th: "外国語 1", td: " - " },
						{ th: "英語第Ⅱ ①", td: "英語第Ⅱ ①" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					ここまでで計24単位ですね。英語も、第二外国語も週2コマが基本で通年で各4単位。ただし、インテンシブは、その科目は週4コマが基本で、通年で8単位となります。また、インテンシブはここまでで計28単位ですね。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					残りは、(44～48)-24=(20～24)単位。自由に選べるので、ここは楽単リストの使いどころになります。埋めるとすれば、人文科学科目と自然科学・数理・統計科目と社会科学科目、そして自主選択科目、人によっては法律学科目(導入科目)と法律学科目(基幹科目)と法律学科目(展開科目)が一般的です。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					ところで、人文科学科目と自然科学・数理・統計科目と社会科学科目はいわゆる一般教養のことです。自主選択科目はいわゆるなんでもオッケーの枠で、各項目の超過分や、体育・情報処理などがこれにあたり、8単位まで認められます。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					まずは、一般教養を１年のうちに取りきることをお勧めします。理由は、三田ではあまり一般教養は開講されていないため、日吉にいる１・２年の間に履修を済ませておくことが望ましいからです。卒業までに取得する必要がある単位数は以下の通りです。
				</p>
				<div className="my-4">
					<HeadingXs heading="一般教養" />
				</div>
				<Table
					head={["系列", "単位数"]}
					items={[
						{ th: "人文科学系列 ", td: "8単位以上" },
						{ th: "自然科学・数理・統計科目", td: "8単位以上" },
						{ th: "社会科学科目（法学以外）", td: "4単位以上" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					仮にピッタリ8+8+4=20単位履修したと考えます。これで、必修の24単位に今の20単位を加えて、計44単位申請(インテンシブは48単位申請)にして終わりにしても良いです。
					あと、残りの48-44=4単位は履修したければ履修すれば良いと思います。候補は以下の通り。
				</p>
				<Table3col
					head={[
						"自主選択科目",
						"体育・情報処理・一般教養の超過分など",
						"備考",
					]}
					items={[
						{
							th: "法律学科目（導入科目）",
							td1: "法制史概論 Ⅰ ② / 法制史概論 Ⅱ ②",
							td2: "1・2年の間に、2年から開講される「国際化と法 ②」も含めた中から、2単位以上推奨",
						},
						{
							th: "法律学科目（基幹科目）",
							td1: "民放（債権各論） Ⅰ ② / 民放（債権各論） Ⅰ ②",
							td2: "2年でも履修できるが、1年で履修した方が教授の要求水準が低いという声をツイッターで見かけた",
						},
						{
							th: "法律学科目（展開科目）",
							td1: "法学演習 Ⅰ/Ⅱ ② / 法務演習 Ⅰ/Ⅱ/Ⅲ ①か②",
							td2: "法曹を目指す人が受ける授業",
						},
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					なぜフル単申請せずに、この残りの4単位を履修するかしないかを自由としているかについて説明します。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					演習科目を日吉で履修しない限り、3・4年を過ごす三田で58単位は確実に履修することになります。58単位の根拠は履修案内を閲覧して計算してください。そうすると、1・2年を過ごす日吉ではマックスで136-58=78単位を履修すれば良いことになります。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					1年でもし48単位フル単してしまえば、2年で78-48=30単位履修すれば良いことになります。しかし、2年から3年の進級条件が2年で30単位以上取得になるので、2年で30単位ギリギリ申請するのは危ないことになってしまいます。余裕を作れば、30単位より多く履修することになり、2年間で78単位を上回り、無駄が生まれます。
				</p>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					このような理由から1年で必ずしも48単位フル単する必要はないかなと思います。もちろん、単位を落とすことを前提にして48単位申請して、44単位取得を見込むのはアリです。
					法法の履修の組み方は以上になります。
				</p>
			</div>
		</div>
	);
};

export default Lawlaw;
