import React from "react";

const MovieCard: React.FC<{
  id: string;
  name: string;
  title: string;
  overview: string;
  imgUrl: string;
  getMovieDetails: (id: string, name: string) => void;
}> = (props) => {
  return (
    <li
      className="p-6 max-w-[90%] md:max-w-[70%] mx-auto bg-slate-100 rounded-xl shadow-md flex flex-col items-center md:flex-row space-x-4 mt-10 cursor-pointer hover:scale-[0.98] duration-200"
      id={props.id}
      key={props.id}
      onClick={() => props.getMovieDetails(props.id, props.name)}
    >
      <div className="flex flex-col gap-3 ">
        <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
          {props.name}
        </h1>
        <span>{props.overview}</span>
      </div>

      <img className="max-h-[250px]" src={props.imgUrl} alt="" />
    </li>
  );
};

export default MovieCard;
