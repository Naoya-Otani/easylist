import React from "react";

// LogoPropsとしてpropsの型を定義
interface LogoProps {
  className?: string; // classNameはオプショナルなstring型
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => { // デフォルト値を設定
  return (
    <img
      src="/icon-easylist.svg"
      alt="logo icon"
      // className propsを適用
      className={className}
    />
  );
};

export default Logo;









