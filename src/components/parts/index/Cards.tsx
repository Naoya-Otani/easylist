import React from "react";
import NavLink from "../common/NavLink";
import NavAnchor from "../common/NavAnchor";

const Cards = () => {
  return (
    <div className="py-8 px-4 md:flex md:flex-wrap justify-center items-center md:gap-4 font-notoSans">
      <div className="max-w-sm lg:max-w-lg min-h-[220px] mb-4 md:mb-0 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          学びの幅を広げよう
        </h2>
        <p className="mb-3 font-normal text-gray-500">
          当サイトでは、幅広い授業から様々な情報を取り揃えています。
          自分に合った授業を見つけ、単位取得を目指しましょう。
        </p>
        <NavLink href="/rakutan/" text="楽単リスト　概要へ" />
      </div>
      <div className="max-w-sm lg:max-w-lg max-h-[246px] min-h-[220px] mb-4 md:mb-0 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>

        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
          効率的に授業を選択しよう
        </h2>
        <p className="mb-3 font-normal text-gray-500">
          単位の取りやすさや実際に受けた人の感想を参考にして、効率的に履修を組みましょう。
        </p>
        <NavLink href="/courses" text="履修の組み方へ" />
      </div>
      <div className="max-w-sm lg:max-w-lg min-h-[220px] mb-4 md:mb-0 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>

        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          楽単を見つけよう
        </h2>
        <p className="mb-3 font-normal text-gray-500">
          当サイトでは、授業の口コミ情報を随時更新しています。
          とりあえず、人文社会から楽単を探してみましょう。
        </p>
        <NavLink href="/rakutan/humanities" text="楽単リスト　人文社会へ" />
      </div>
      <div className="max-w-sm lg:max-w-lg min-h-[220px] p-6 md:mb-0 bg-white border border-gray-200 rounded-lg shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>

        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          質問はオープンチャットで
        </h2>
        <p className="mb-3 font-normal text-gray-500">
          Webで分からないことがあれば、LINEのオープンチャットで質問できます。
          また、その他のSNSでも情報発信しています。
        </p>
        <NavAnchor
          href="https://line.me/ti/g2/blzJBWWmrCi3EUzYB2uSVA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          text="オープンチャットへ"
        />
      </div>
    </div>
  );
};

export default Cards;
