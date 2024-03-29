import { useQuery } from "react-query";
import { MovieDataResponse, MoviesDataResponse } from "./model";

async function fetchSingleMovies(
  id: string | null
): Promise<MovieDataResponse> {
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

async function fetchMoviesHandler(
  searchText: string | null
): Promise<MoviesDataResponse> {
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
