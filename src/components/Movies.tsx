import React from "react";
import { useMoviesQuery } from "../getMovies";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import MovieCard from "./MovieCard";

const Movies: React.FC = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const { data, isLoading, isError } = useMoviesQuery(title);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>later..</p>
      </div>
    );
  const getMovieDetails = (id: string) => {
    navigate({
      pathname: `/movie/${id}`,
      search: createSearchParams({
        title: title ? title : "",
      }).toString(),
    });
  };

  return (
    <div>
      <ul>
        {data?.data?.searchMovies?.map(
          (movie: {
            id: any;
            name: string;
            title: string;
            overview: string;
            poster: { medium: string };
          }) => {
            return (
              <MovieCard
                id={movie.id}
                name={movie.name}
                title={movie.title}
                overview={movie.overview}
                imgUrl={movie.poster?.medium}
                getMovieDetails={getMovieDetails}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Movies;
