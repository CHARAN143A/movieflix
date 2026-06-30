export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
  original_language: string;
  genres: Genre[];
}