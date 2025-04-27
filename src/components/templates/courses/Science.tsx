import Heading from "../../parts/common/Heading";
import HeadingXs from "../../parts/common/HeadingXs";
import Table from "../../parts/common/Table";

const Science = () => {
	return (
		<div className="outlineStyle font-notoSans">
			<div className="my-8">
				<Heading heading="履修の組み方　理工学部" />
			</div>
			<div className="mb-4">
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					理工学部の新入生のみなさん、あなたたちの授業は必修に縛られています。なんと40単位分はクラスごとに先生が指定されていて、選択の余地がありません。そのうちの英語に関しては、クラスとレベルに応じて先生が指定されていて、選択の余地がありません。
					では、選択の余地がない必修を埋めていきましょう。クラスが発表されたら、まず以下の科目を埋めましょう。クラスが発表されないと履修は組めません。理工学部１年の時間割を見ながら埋めていこう。
				</p>
				<div className="my-4">
					<HeadingXs heading="必修" />
				</div>
				<p className="text-black mb-8 px-4 text-sm lg:text-lg">
					○の中の数字は単位数です。
					フランス語は第二外国語の例として挙げています。
				</p>
				<div className="space-y-8 lg:space-y-0 mb-8">
					<div>
						<p className="text-black font-bold mb-8 px-4 text-sm lg:text-lg">
							学問A・B・D
						</p>
						<Table
							head={["春学期", "秋学期"]}
							items={[
								{
									th: "英語１②",
									td: "英語２②",
								},
								{ th: "フランス語１②", td: "フランス語３②" },
								{ th: "フランス語２②", td: "フランス語４②" },
								{ th: "情報学基礎②", td: " - " },
								{
									th: "自然科学実験(春か秋)(２コマ連続)②",
									td: " - ",
								},
								{ th: "理工学概論(春か秋)②", td: " - " },
								{ th: "生物学序論(春or秋)②", td: " - " },
								{ th: "数学１Ａ②", td: "数学１Ｂ②" },
								{ th: "数学２Ａ②", td: "数学２Ｂ②" },
								{
									th: "物理学Ａ(春前半)(週２コマ)②",
									td: "物理学Ｃ(秋前半)(週２コマ)②",
								},
								{
									th: "物理学Ｂ(春後半)(週２コマ)②",
									td: "物理学Ｄ(秋後半)(週２コマ)②",
								},
								{ th: "化学Ａ②", td: "化学Ｂ②" },
							]}
							thBold={false}
						/>
					</div>
					<div>
						<p className="text-black font-bold my-8 px-4 text-sm lg:text-lg">
							学問C（数学系）
						</p>
						<Table
							head={["春学期", "秋学期"]}
							items={[
								{
									th: "英語１②",
									td: "英語２②",
								},
								{ th: "フランス語１②", td: "フランス語３②" },
								{ th: "フランス語２②", td: "フランス語４②" },
								{ th: "情報学基礎②", td: " - " },
								{
									th: "自然科学実験(春か秋)(２コマ連続)②",
									td: " - ",
								},
								{ th: "理工学概論(春か秋)②", td: " - " },
								{ th: "生物学序論(春or秋)②", td: " - " },
								{ th: "数学３Ａ②", td: "数学３Ｂ②" },
								{ th: "数学４Ａ②", td: "数学４Ｂ②" },
								{
									th: "物理学Ａ(春前半)(週２コマ)②",
									td: "物理学Ｃ(秋前半)(週２コマ)②",
								},
								{
									th: "物理学Ｂ(春後半)(週２コマ)②",
									td: "物理学Ｄ(秋後半)(週２コマ)②",
								},
								{ th: "化学Ａ②", td: "化学Ｂ②" },
							]}
							thBold={false}
						/>
					</div>
					<div>
						<p className="text-black font-bold my-8 px-4 text-sm lg:text-lg">
							学問E（化学系）
						</p>
						<Table
							head={["春学期", "秋学期"]}
							items={[
								{
									th: "英語１②",
									td: "英語２②",
								},
								{ th: "フランス語１②", td: "フランス語３②" },
								{ th: "フランス語２②", td: "フランス語４②" },
								{ th: "情報学基礎②", td: " - " },
								{
									th: "自然科学実験(春か秋)(２コマ連続)②",
									td: " - ",
								},
								{ th: "理工学概論(春か秋)②", td: " - " },
								{ th: "生物学序論(春or秋)②", td: " - " },
								{ th: "数学１Ａ②", td: "数学１Ｂ②" },
								{ th: "数学２Ａ②", td: " - " },
								{
									th: "物理学Ａ(春前半)(週２コマ)②",
									td: "物理学Ｃ(秋前半)(週２コマ)②",
								},
								{
									th: "物理学Ｂ(春後半)(週２コマ)②",
									td: "物理学Ｄ(秋後半)(週２コマ)②",
								},
								{ th: "化学Ａ②", td: "化学Ｂ②" },
								{ th: " -  ", td: "化学D②" },
							]}
							thBold={false}
						/>
					</div>
				</div>
				<p className="text-black mb-8 px-4 text-sm lg:text-lg">
					以上です。ここの単位はできるだけ拾うようにしましょう。ここまでで計40単位ですね。
					最大54単位申請できるので、残りは54-40=14単位。これは自由に授業を選べるから、楽単リストやFDアンケートを利用して選んでいきましょう！一般教養と呼ばれる総合教育科目を選んでいきます。注目してほしいのは1・2年で10単位以上履修することです。従って、1年のうちに10単位履修してしまおう。要件は以下の通りになります。
				</p>
				<div className="my-4">
					<HeadingXs heading="一般教養" />
				</div>
				<Table
					head={["系列", "単位数"]}
					items={[
						{ th: "系列X（人文・社会・国際系科目）", td: "4単位以上" },
						{ th: "系列Y（その他）", td: "0単位以上" },
						{ th: "合計", td: "10単位以上" },
					]}
					thBold={false}
				/>
				<p className="text-black my-8 px-4 text-sm lg:text-lg">
					系列Yの体育は2単位までとなります。ここまでで、40+10=50単位です。そうすると、54-50で4単位が残ります。一般的にはこの自主選択科目という枠に残りの単位を埋めます。それは何かというと、各項目の超過分で、8単位分課せられています。なので1年は一般教養を10単位より多く履修することでその枠を埋めることができます。残りの4単位を埋めたかったら、さらに一般教養を履修することで埋めてください。必修で大変なら埋めなくて良いでしょう。従って、理工学部は50～54単位(フル単)申請が基本となります。
				</p>
			</div>
		</div>
	);
};

export default Science;
