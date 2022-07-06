import React from "react";
import { useMoviesQuery } from "../getMovies";
import MovieCard from "./MovieCard";

type MovieType = {
  id: any;
  name: string;
  title: string;
  overview: string;
  poster: { medium: string };
};

const MoviesList: React.FC<{
  title: string | null;
  getMovieDetails: (id: string) => void;
}> = (props) => {
  const { title, getMovieDetails } = props;

  const { data, isLoading, isError } = useMoviesQuery(title);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>later..</p>
      </div>
    );

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

export default MoviesList;
