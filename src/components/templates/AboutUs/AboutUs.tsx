import React from "react";
import Profile from "../../parts/AboutUs/Profile";

const AboutUs = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div>
        <h1 className="text-center text-3xl font-bold my-16">運営チーム</h1>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Profile
            name="Sato Yamato"
            title="楽単リスト・SNS運用"
            text="経済学部2年。楽単リストの開発・運営を担当しています。趣味はお笑い鑑賞。SNS運用の代行とコンサルをしています。"
            imgPath="/yamato_prof.webp"
          />
          <Profile
            name="Kazunori Higuchi"
            title="楽単リスト・SNS運用"
            text="経済学部3年。楽単リストの開発・運用を担当しています。院進目指し中。"
            imgPath="/kazurori_prof.webp"
          />
          <Profile
            name="Naoya Otani"
            title="楽単リスト開発者"
            text="文学部3年。楽単リストのWebサイトの開発・運用を担当しています。趣味は家系ラーメンとサウナ。
              フロントエンドエンジニアとしてインターンに従事しています。"
            imgPath="/huma_finance.webp"
          />
          <Profile
            name="S. O."
            title="楽単リスト旧サイト運営"
            text=" "
            imgPath="/so_prof.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
