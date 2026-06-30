const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
};

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  if (!res.ok) {
    throw new Error("Failed to search movies");
  }

  return res.json();
};


export const getMovieDetails = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return res.json();
};