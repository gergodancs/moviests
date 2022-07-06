import React from "react";
import { useMoviesQuery } from "../getMovies";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Movie from "./Movie";
type MovieType = {
  id: any;
  name: string;
  title: string;
  overview: string;
  poster: { medium: string };
};

const Movies: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const id = searchParams.get("id");

  const { data, isLoading, isError } = useMoviesQuery(title);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>later..</p>
      </div>
    );
  const getMovieDetails = (id: string) => {
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  if (id) {
    return <Movie />;
  }

  return (
    <div>
      <ul>
        {data.data?.searchMovies?.map((movie: MovieType) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.name}
              title={movie.title}
              overview={movie.overview}
              imgUrl={movie.poster?.medium}
              getMovieDetails={getMovieDetails}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
