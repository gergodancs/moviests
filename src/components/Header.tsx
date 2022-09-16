import React from "react";
import SearchBar from "./SearchBar";

const Header: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="w-full xl:w-[100%] h-[100%] mx-auto bg-slate-200">
      <SearchBar />
      <main className="p-10 mt-10">{props.children}</main>
    </div>
  );
};

export default Header;
