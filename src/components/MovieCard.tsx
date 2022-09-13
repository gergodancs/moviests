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
      className="p-6  mx-auto bg-slate-100 rounded-xl shadow-md flex-row  items-center md:flex-row space-x-4 mt-10 cursor-pointer hover:scale-[0.98] duration-200"
      id={props.id}
      key={props.id}
      onClick={() => props.getMovieDetails(props.id, props.name)}
    >
      <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
        {props.name}
      </h1>
      <span>{props.overview}</span>
      <div className="mt-10 ">
        <img className="mx-auto max-h-[350px]" src={props.imgUrl} alt="pics" />
      </div>
    </li>
  );
};

export default MovieCard;
