import React from "react";
import LogoBar from "@/src/components/parts/common/LogoBar";
import NavBar from "@/src/components/parts/Header/NavBar";


interface HeaderProps {
  className?: string;
}


const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <div className="flex md:flex-col md:gap-y-4 lg:gap-0 lg:flex-row justify-between items-center py-6 mx-8 border-b-[1px] border-gray-200 lg:border-0">
        <LogoBar />
        <NavBar />
      </div>
      <div className="hidden lg:block">
      </div>
    </header>
  );
};

export default Header;
