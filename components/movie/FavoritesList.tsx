"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";
import MovieGrid from "./MovieGrid";
import { getMovieDetails } from "@/services/api";

export default function FavoritesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const stored = localStorage.getItem("favorites");

      if (!stored) {
        setLoading(false);
        return;
      }

      const ids: number[] = JSON.parse(stored);

      if (ids.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const data = await Promise.all(
          ids.map((id) => getMovieDetails(String(id)))
        );

        setMovies(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    loadFavorites();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-400">
        Loading favorites...
      </p>
    );
  }

  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No favorite movies yet.
      </p>
    );
  }

  return <MovieGrid movies={movies} />;
}