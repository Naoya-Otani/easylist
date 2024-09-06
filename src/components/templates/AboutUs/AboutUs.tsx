import React from "react";
import Profile from "../../parts/AboutUs/Profile";

const AboutUs = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div>
        <h1 className="text-center text-3xl font-bold my-16">運営チーム</h1>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Profile
            name="Naoya Otani"
            title="ソフトウェアエンジニア"
            text="文学部3年。楽単リストのWebサイトの開発・運用を担当しています。趣味は家系ラーメンとサウナ。
              ソフトウェアエンジニアとして働いています。"
            imgPath="/huma_finance.webp"
            link="https://bento.me/naotani"
          />
          <Profile
            name="Ryuya Kawaguchi"
            title="LLMエンジニア"
            text="大阪芸術大学4年。AI・kaagle🥉・chatbot開発を行っております。東大松尾研コミュニティであるmaccに所属。AI・DXのスタートアップでインターン中。"
            imgPath="/selfie_kawaguchi.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
