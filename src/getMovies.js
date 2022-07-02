import { useQuery } from "react-query";

const fetchMoviesHandler = async (searchText) => {
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
};

export const useMoviesQuery = (searchText) => {
  return useQuery(["movies", searchText], () => fetchMoviesHandler(searchText));
};
