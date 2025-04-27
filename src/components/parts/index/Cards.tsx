import React from "react";
import Card from "../../atoms/Card";
import Book from "../../atoms/icon/Book";
import Chat from "../../atoms/icon/Chat";
import Lightning from "../../atoms/icon/Lightning";
import Update from "../../atoms/icon/Update";

import NavAnchor from "../common/NavAnchor";
import NavLink from "../common/NavLink";

const Cards = () => {
	return (
		<div className="py-8 px-4 lg:px-16 lg:px-auto md:grid grid-cols-2 grid-rows-2 place-content-center place-items-stretch lg:place-items-center md:gap-4 lg:gap-8 font-notoSans">
			<Card
				title="履修の幅を広げよう"
				text="当サイトでは、幅広い授業から様々な情報を取り揃えています。 自分に合った授業を見つけ、単位取得を目指しましょう。"
				icon={<Book />}
				navigationLink={<NavLink href="/rakutan" text="楽単リスト　概要へ" />}
			/>
			<Card
				title="効率的に授業を選ぼう"
				text="単位の取りやすさや実際に受けた人の感想を参考にして、効率的に履修を組みましょう。"
				icon={<Lightning />}
				navigationLink={<NavLink href="/courses" text="履修の組み方へ" />}
			/>
			<Card
				title="楽単を見つけよう"
				text="当サイトでは、授業の口コミ情報を随時更新しています。人文社会から楽単を探してみましょう。"
				icon={<Update />}
				navigationLink={
					<NavLink href="/rakutan/humanities" text="人文社会へ" />
				}
			/>
			<Card
				title="質問はオープンチャットで"
				text="Webで分からないことがあれば、LINEのオープンチャットで質問できます。 また、その他のSNSでも情報発信しています。"
				icon={<Chat />}
				navigationLink={
					<NavAnchor
						href="https://line.me/ti/g2/blzJBWWmrCi3EUzYB2uSVA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
						text="オープンチャットへ"
					/>
				}
			/>
		</div>
	);
};

export default Cards;
