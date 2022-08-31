export interface MovieDataResponse {
  data: SingleMovieData;
}

export type SingleMovieData = {
  movie: SingleMovie;
};

export type SingleMovie = {
  id: string;
  name: string;
  overview: string;
  poster: { medium: string };
};

export interface MoviesDataResponse {
  data: MovieDatas;
}
export type MovieDatas = {
  searchMovies: Movies;
};

export type Movies = SingleMovie[];
