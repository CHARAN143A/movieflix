"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PageTransition from "@/components/ui/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MovieGrid from "@/components/movie/MovieGrid";

import { useAuth } from "@/context/AuthContext";
import { getFavorites } from "@/services/firestore";
import { getMovieDetails } from "@/services/api";

import { Movie } from "@/types/movie";

export default function FavoritesPage() {
  const { user } = useAuth();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      if (!user) {
        setMovies([]);
        setLoading(false);
        return;
      }

      try {
        const ids = await getFavorites(user.uid);

        const results = await Promise.all(
          ids.map((id: number) => getMovieDetails(String(id)))
        );

        setMovies(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, [user]);

  if (loading) {
    return (
      <ProtectedRoute>
        <LoadingScreen />
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <PageTransition>
        <main className="mx-auto min-h-screen max-w-screen-2xl px-5 py-12 lg:px-10">
          <h1 className="mb-10 text-4xl font-black tracking-wide">
            ❤️ My Favorites
          </h1>

          {movies.length === 0 ? (
            <div className="flex h-[50vh] items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/50">
              <p className="text-lg text-gray-400">
                You haven't added any favorite movies yet.
              </p>
            </div>
          ) : (
            <MovieGrid movies={movies} />
          )}
        </main>
      </PageTransition>
    </ProtectedRoute>
  );
}