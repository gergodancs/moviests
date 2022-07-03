import React from "react";
import SearchBar from "./SearchBar";

const Header: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="w-full xl:w-[90%] h-[100vh] mx-auto bg-slate-200">
      <SearchBar />
      <main className="h-[90%%]">{props.children}</main>
    </div>
  );
};

export default Header;
