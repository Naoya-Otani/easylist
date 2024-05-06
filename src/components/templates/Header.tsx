import React from "react";
import LogoBar from "../parts/common/LogoBar";
import NavBar from "../parts/Header/NavBar";
import SearchBar from "../parts/Header/SearchBar";

const Header = ({ showSearchBar = true }) => { 
  return (
    <header>
      <div className="flex md:flex-col md:gap-y-4 lg:gap-0 lg:flex-row justify-between items-center py-6 mx-8 border-b-[1px] border-gray-200 lg:border-0">
        <LogoBar />
        <NavBar />
      </div>
      {showSearchBar && ( 
        <div className="hidden lg:block">
          <SearchBar />
        </div>
      )}
    </header>
  );
};

export default Header;
