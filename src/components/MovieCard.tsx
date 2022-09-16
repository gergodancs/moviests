import React from "react";

const MovieCard: React.FC<{
  id: string;
  name: string;

  overview: string;
  imgUrl: string;
  getMovieDetails: (id: string, name: string) => void;
}> = (props) => {
  return (
    <li
      className="p-4 max-w-[400px]  mx-auto bg-slate-100 rounded-xl shadow-md flex flex-col items-center justify-start cursor-pointer hover:scale-[0.98] duration-200 gap-1"
      id={props.id}
      key={props.id}
      onClick={() => props.getMovieDetails(props.id, props.name)}
    >
      <h1 className="text-center font-bold text-xl   hover:text-[#333] ">
        {props.name}
      </h1>
      <span>{props.overview}...</span>
      <div className=" h-full flex flex-col justify-end">
        <img
          className="mx-auto  max-h-[350px] rounded-xl "
          src={props.imgUrl}
          alt="pics"
        />
      </div>
    </li>
  );
};

export default MovieCard;
