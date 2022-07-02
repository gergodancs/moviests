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
    <form onSubmit={showMoviesList}>
      <h1>Movies</h1>
      <div>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          id="search"
          placeholder="Type a movie title..."
        />
        <button>Get Movies</button>
      </div>
    </form>
  );
};

export default SearchBar;
