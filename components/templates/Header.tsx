import React from "react";
import LogoBar from "../parts/common/LogoBar";
import NavBar from "../parts/Header/NavBar";
import SearchBar from "../parts/Header/SearchBar";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center my-6 mx-8">
        <LogoBar />
        <NavBar />
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
