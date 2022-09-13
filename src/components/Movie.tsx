import React from "react";
import { useSingleMoviesQuery } from "../getMovies";

const Movie: React.FC<{ id: string }> = (props) => {
  const { id } = props;

  const { data, isLoading, isError } = useSingleMoviesQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>error...</p>
      </div>
    );

  return (
    <div className="p-6 max-w-[90%] md:max-w-[70%] h-[400px] mx-auto bg-slate-100 rounded-xl shadow-md space-x-4 mt-10">
      <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
        {data?.data.movie?.name}
      </h1>
      <span>{data?.data.movie?.overview}</span>
      <img
        className="max-h-[250px]"
        src={data?.data.movie.poster?.medium}
        alt="pics"
      />
    </div>
  );
};

export default Movie;
