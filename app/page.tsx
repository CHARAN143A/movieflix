import type { Metadata } from "next";

import HeroBanner from "@/components/movie/HeroBanner";
import MovieBrowser from "@/components/movie/MovieBrowser";

import {
  fetchTrendingMovies,
  getGenres,
} from "@/services/api";

export const metadata: Metadata = {
  title: "MovieFlix | Discover Movies",
  description:
    "Explore trending, popular, and top-rated movies with trailers, cast, favorites, and watchlists.",
};

export default async function HomePage() {
  const [movies, genres] = await Promise.all([
    fetchTrendingMovies(),
    getGenres(),
  ]);

  const featuredMovie = movies.results[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-screen-2xl px-5 py-10 lg:px-10">

        {/* Hero Banner */}
        <HeroBanner movie={featuredMovie} />

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Section Header */}
        <section className="mb-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-red-500">
                DISCOVER
              </p>

              <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
                Trending Movies
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                Browse the latest trending movies from around the world.
                Filter by genre, sort by popularity or ratings, and
                discover your next favorite film.
              </p>

            </div>

            {/* Stats Card */}

            <div
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                px-8
                py-5
                backdrop-blur
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">
                Available
              </p>

              <h3 className="mt-2 text-4xl font-black text-white">
                {movies.results.length}
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                Trending Movies
              </p>
            </div>

          </div>

        </section>

        {/* Movie Browser */}

        <MovieBrowser
          genres={genres.genres}
          initialMovies={movies.results}
        />

      </div>
    </main>
  );
}