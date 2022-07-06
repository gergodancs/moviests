import React from "react";
import { useSearchParams } from "react-router-dom";

import Movie from "./Movie";
import MoviesList from "./MoviesList";

const Movies: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const id = searchParams.get("id");

  const getMovieDetails = (id: string) => {
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  if (id) {
    return <Movie id={id} />;
  }

  return <MoviesList title={title} getMovieDetails={getMovieDetails} />;
};

export default Movies;
