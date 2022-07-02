import React from "react";
import SearchBar from "./SearchBar";

const Header: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div>
      <SearchBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Header;
