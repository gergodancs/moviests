import { useQuery } from "react-query";

async function fetchSingleMovies(id: string | null): Promise<any> {
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
async function fetchMoviesHandler(searchText: string | null): Promise<any> {
  const movies_query = `{
          searchMovies(query: "${searchText}") {
            id
            keywords{
              name
            }
            similar{
              name
              overview
              poster{
                medium
              }
            }
            name
            poster{
              medium
            }
            overview
            releaseDate
            
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
