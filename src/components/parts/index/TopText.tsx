import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopText = () => {
  return (
    <>
      <div className="flex items-center justify-center my-12">
        <div className="md:flex items-start lg:ml-4 font-gothicA1 hidden">
          <Link href="/">
            <img
              src="/icon-easylist.svg"
              alt="logo icon"
              className="w-14 h-14 mr-4 md:mr-6"
            />
          </Link>
          <div className="flex">
            <p className="font-bold tracking-widest mr-2 md:text-6xl">KEIO</p>
            <p className="font-extralight tracking-widest md:text-6xl">
              EASYLIST
            </p>
          </div>
        </div>
      </div>

      <div className="font-notoSans flex flex-col justify-around px-4">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl mb-2 font-bold text-center">
            楽に楽単を見つけよう
          </h1>
          <p className="text-center font-normal text-gray-500">
            実際に履修した人の口コミで、 リアルな授業情報をチェック
          </p>
        </div>
      </div>
    </>
  );
};

export default TopText;
