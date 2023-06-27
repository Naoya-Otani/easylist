import React from "react";
import { NextPage } from "next";
import Header from "@/src/components/templates/Header";
import Footer from "@/src/components/templates/Footer";
import NavLink from "@/src/components/parts/common/NavLink";

const NotFound: NextPage = () => {
  return (
    <>
      <Header />
      <div className="outlineStyle font-notoSans">
        <p className="text-center text-2xl font-medium my-8">
          ページが見つかりませんでした
        </p>
        <div className="flex justify-center">
          <NavLink href="/" text="サイトトップに戻る" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
