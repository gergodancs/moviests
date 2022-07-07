import { useQuery } from "react-query";

type MovieData = {
  data: {
    movie: {
      id: string;
      name: string;
      overview: string;
      poster: { medium: string };
    };
  };
};
type MoviesData = {
  data: {
    searchMovies: [
      {
        id: string;
        name: string;
        overview: string;
        poster: { medium: string };
      }
    ];
  };
};

async function fetchSingleMovies(id: string | null): Promise<MovieData> {
  const movies_query = `{
    movie(id:${id}){
      id
      name
      overview
      poster{medium
      }
    }
  }`;
  const response = await fetch("https://tmdb.sandbox.zoosh.ie/dev/grphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: movies_query }),
  });
  return response.json();
}
//a promise után szerettem volna MovieData||QueryData type-ot de nem jött össze
async function fetchMoviesHandler(
  searchText: string | null
): Promise<MoviesData> {
  const movies_query = `{
          searchMovies(query: "${searchText}") {
            id 
            name
            overview
            poster{
              medium
            }
           }
        }`;

  const response = await fetch("https://tmdb.sandbox.zoosh.ie/dev/grphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: movies_query }),
  });

  return response.json();
}

export const useMoviesQuery = (searchText: string | null) => {
  return useQuery(["movies", searchText], () => fetchMoviesHandler(searchText));
};

export const useSingleMoviesQuery = (id: string | null) => {
  return useQuery(["singleMovies", id], () => fetchSingleMovies(id));
};
