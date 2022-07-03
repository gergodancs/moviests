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
    <div className="p-6 max-w-[90%] md:max-w-[70%] h-[400px] mx-auto bg-slate-100 rounded-xl shadow-md flex flex-col items-center md:flex-row space-x-4 mt-10">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
          {movie[0]?.name}
        </h1>
        <span>{movie[0]?.overview}</span>
      </div>
      <img
        className="max-h-[250px]"
        src={movie[0]?.poster?.medium}
        alt="pics"
      />
    </div>
  );
};

export default Movie;
