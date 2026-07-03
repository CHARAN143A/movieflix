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

export const searchMovies = async (
  query: string,
  page: number = 1
) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to search movies");
  }

  return res.json();
};


export const getMovieDetails = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("TMDB Error:", res.status, data);

    return null;
  }

  return data;
};


export const getMovieVideos = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  if (!res.ok) {
    return { results: [] };
  }

  return res.json();
};


export const getMovieCredits = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  if (!res.ok) {
    return { cast: [] };
  }

  return res.json();
};


export const getSimilarMovies = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
  );

  if (!res.ok) {
    return { results: [] };
  }

  return res.json();
};


export const getGenres = async () => {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json();
};


export const discoverMovies = async (
  genreId?: string,
  page: number = 1,
  sortBy: string = "popularity.desc"
) => {
  let url =
    `${BASE_URL}/discover/movie?api_key=${API_KEY}` +
    `&page=${page}` +
    `&sort_by=${sortBy}`;

  if (genreId) {
    url += `&with_genres=${genreId}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
};

export const searchSuggestions = async (query: string) => {
  if (!query.trim()) return [];

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch suggestions");
  }

  const data = await res.json();

  return data.results.slice(0, 6);
};

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  return res.json();
}

export async function getTopRatedMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  return res.json();
}

export async function getUpcomingMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
  );

  return res.json();
}

export const getMovieReviews = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
};