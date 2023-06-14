import Avatar from "@/src/components/atoms/Avatar";
import React from "react";

const AboutUs = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div>
        <h1 className="text-center text-3xl font-bold my-16">運営チーム</h1>
        <div className="space-y-6 flex flex-col justify-center">
          <div className="md:inline-flex justify-center items-center p-6 rounded border border-gray-300">
            <div className="p-2">
              <Avatar srcPath="/yamato_prof.webp" />
              <p className="text-center mt-4 text-gray-800 font-medium">
                Yamato Sato
              </p>
              <p className="text-center mb-4 md:mb-0 text-gray-700">
                楽単リスト・SNS運用
              </p>
            </div>
            <p className="max-w-[390px] text-center py-2">
              経済学部2年。楽単リストの開発・運営を担当しています。趣味はお笑い鑑賞。SNS運用の代行とコンサルをしています。
            </p>
          </div>
          <div className="md:inline-flex justify-center items-center p-6 rounded border border-gray-300">
            <div className="p-2">
              <Avatar srcPath="/kazurori_prof.webp" />
              <p className="text-center mt-4 text-gray-800 font-medium">
                Kazunori Higuchi
              </p>
              <p className="text-center mb-4 md:mb-0 text-gray-700">
                楽単リスト・SNS運用
              </p>
            </div>
            <p className="max-w-[390px] text-center py-2">
              経済学部3年。楽単リストの開発・運用を担当しています。就活中。
            </p>
          </div>
          <div className="md:inline-flex justify-center items-center p-6 rounded border border-gray-300 space-x-4">
            <div className="p-2">
              <Avatar srcPath="/huma_finance.webp" />
              <p className="text-center mt-4 text-gray-800 font-medium">
                Naoya Otani
              </p>
              <p className="text-center mb-4 md:mb-0 text-gray-700">
                楽単リスト開発者
              </p>
            </div>
            <p className="max-w-[390px] text-center py-2">
              文学部3年。楽単リストのWebサイトの開発・運用を担当しています。趣味は家系ラーメンとサウナ。
              フロントエンドエンジニアとしてインターンに従事しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
