import React from "react";
import LogoBar from "@/src/components/parts/common/LogoBar";
import NavBar from "@/src/components/parts/Header/NavBar";

// HeaderProps 型定義を追加
interface HeaderProps {
  className?: string;
}

// Props を Header コンポーネントに適用
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}> {/* className プロパティを header 要素に適用 */}
      <div className="flex md:flex-col md:gap-y-4 lg:gap-0 lg:flex-row justify-between items-center py-6 mx-8 border-b-[1px] border-gray-200 lg:border-0">
        <LogoBar />
        <NavBar />
      </div>
      <div className="hidden lg:block">
        {/* 他のコンテンツがある場合はここに追加 */}
      </div>
    </header>
  );
};

export default Header;
