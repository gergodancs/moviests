import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const showMoviesList = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchText || searchText.trim().length < 2) {
      return alert("type at least two characters");
    }
    navigate({
      pathname: "movies",
      search: createSearchParams({
        title: searchText,
      }).toString(),
    });
    setSearchText("");
  };

  return (
    <form
      onSubmit={showMoviesList}
      className=" flex flex-col justify-center gap-2  mx-auto  p-10 bg-slate-400 "
    >
      <h1 className="text-center font-bold text-3xl tracking-widest">Movies</h1>
      <div className="flex w-full justify-center gap-2 h-10">
        <input
          className="md:w-[50%] px-5 focus:outline-none   border border-gray-300 rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          id="search"
          placeholder="Type a movie title..."
        />
        <button className="w-sm bg-gray-300 px-10 rounded-lg shadow-sm">
          Get Movies
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
