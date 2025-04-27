import React from "react";
import Heading from "../common/Heading";
import HeadingSm from "../common/HeadingSm";
import NavAnchor from "../common/NavAnchor";
import ListSection from "./ListSection";
import ListSection2 from "./ListSection2";
import ListSection3 from "./ListSection3";
import ListSection4 from "./ListSection4";

const TextSection = () => {
	return (
		<div className="my-8 px-4 md:px-8 lg:px-16 font-notoSans">
			<div className="mb-4">
				<Heading heading="2021年以降の情報について" />
				<h2 className="text-black mt-4 px-4 text-sm">
					2021年以降の情報は、1から7までの自由記述形式で回答していただいていました！
				</h2>
				<ListSection />
				<div className="px-4">
					<NavAnchor
						href="https://www.keio-easylist.com/%E6%A5%BD%E5%8D%98%E3%83%AA%E3%82%B9%E3%83%88"
						text="過去の楽単リストへ"
					/>
				</div>
			</div>
			<div className="mb-4">
				<Heading heading="楽単情報で参考にするべきこと" />
				<ListSection2 />
			</div>
			<div className="mb-4">
				<Heading heading="履修のコツ" />
				<h2 className="text-black mt-4 px-4 text-sm">
					楽単を受講するためには、情報のクロスチェックが大事です。
					複数のソースから情報を比較して授業を選びましょう。
				</h2>
				<ListSection3 />
			</div>
			<div className="mb-4">
				<Heading heading="抽選の授業について" />
				<h2 className="text-black my-4 px-4 text-sm">
					大学の授業では、面白さや楽単で有名な授業は人気があります。
					そのため、人気のある授業では抽選によって受講人数が絞られます。
					抽選の可能性がある授業は、シラバスに抽選予定と記載されているので、
					把握しておくことが大事です。
				</h2>
				<HeadingSm heading="事前抽選" />
				<ListSection4 />
				<HeadingSm heading="履修申告" />
				<h2 className="text-black my-4 px-4 text-sm">
					それ以外の大半の授業は履修申告後にコンピューターで抽選します。コロナ渦前は学籍番号の下１桁で抽選していました。2020年はランダム抽選です。ここに2019年と2020年の抽選結果を貼っておきますね。2019年は抽選になった科目
					（あたりにくい科目）と、追加履修できない科目が楽単ということです。2020年は抽選にならなくて追加履修可能だったもののリストなので、このリストにのってない科目が楽単です。抽選結果は客観的な指標として使えます。
				</h2>
			</div>
		</div>
	);
};

export default TextSection;
