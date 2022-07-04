import React from "react";
import { useParams } from "react-router-dom";

import { useSingleMoviesQuery } from "../getMovies";

const Movie: React.FC = () => {
  const params = useParams();

  const paramsId = params.id ? params.id : "";

  const { data, isLoading, isError } = useSingleMoviesQuery(paramsId);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>error...</p>
      </div>
    );

  return (
    <div className="p-6 max-w-[90%] md:max-w-[70%] h-[400px] mx-auto bg-slate-100 rounded-xl shadow-md flex flex-col items-center md:flex-row space-x-4 mt-10">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
          {data.data.movie.name}
        </h1>
        <span>{data.data.movie.overview}</span>
      </div>
      <img
        className="max-h-[250px]"
        src={data.data.movie.poster?.medium}
        alt="pics"
      />
    </div>
  );
};

export default Movie;
