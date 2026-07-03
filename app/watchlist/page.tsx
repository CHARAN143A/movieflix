"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PageTransition from "@/components/ui/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MovieGrid from "@/components/movie/MovieGrid";

import { useAuth } from "@/context/AuthContext";
import { getWatchlist } from "@/services/firestore";
import { getMovieDetails } from "@/services/api";

import { Movie } from "@/types/movie";

export default function WatchlistPage() {
  const { user } = useAuth();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWatchlist() {
      if (!user) {
        setMovies([]);
        setLoading(false);
        return;
      }

      try {
        const ids = await getWatchlist(user.uid);

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

    loadWatchlist();
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
            🔖 My Watchlist
          </h1>

          {movies.length === 0 ? (
            <div className="flex h-[50vh] items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/50">
              <p className="text-lg text-gray-400">
                Your watchlist is empty.
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