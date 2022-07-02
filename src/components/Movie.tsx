import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useMoviesQuery } from "../getMovies";

const Movie: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const title = searchParams.get("title");
  const paramsId = params.id;

  const { data, isFetching, isError } = useMoviesQuery(title);

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>error...</p>
      </div>
    );

  const movie = data?.data?.searchMovies?.filter(
    (movie: { id: string; name: string }) => {
      return movie.id === paramsId;
    }
  );

  return (
    <div>
      <h3>{movie[0]?.name}</h3>
    </div>
  );
};

export default Movie;
