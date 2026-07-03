"use client";

import { useEffect, useState } from "react";

import GenreFilter from "@/components/filters/GenreFilter";
import SortDropdown from "@/components/filters/SortDropdown";
import MovieGrid from "./MovieGrid";
import MovieGridSkeleton from "@/components/ui/MovieGridSkeleton";

import { discoverMovies } from "@/services/api";
import { Movie } from "@/types/movie";

import PageTransition from "@/components/ui/PageTransition";

type Genre = {
  id: number;
  name: string;
};

type Props = {
  genres: Genre[];
  initialMovies: Movie[];
};

export default function MovieBrowser({
  genres,
  initialMovies,
}: Props) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [loading, setLoading] = useState(false);

  const [sortBy, setSortBy] =
    useState("popularity.desc");

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);

      try {
        const data = await discoverMovies(
          selectedGenre,
          page,
          sortBy
        );

        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    loadMovies();
  }, [selectedGenre, sortBy, page]);

  return (
    <PageTransition>
    <div className="space-y-10">

      {/* Filter Card */}
      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/60
          p-6
          backdrop-blur
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h3 className="text-xl font-bold text-white">
              Browse Movies
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Filter by genre or sort movies.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <GenreFilter
              genres={genres}
              value={selectedGenre}
              onChange={(value) => {
                setSelectedGenre(value);
                setPage(1);
              }}
            />

            <SortDropdown
              value={sortBy}
              onChange={(value) => {
                setSortBy(value);
                setPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {/* Movie Count */}

      {!loading && (
        <div className="flex items-center justify-between">

          <p className="text-gray-400">
            Showing
            <span className="mx-2 font-bold text-white">
              {movies.length}
            </span>
            movies
          </p>

          <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-300">
            Page {page}
          </span>

        </div>
      )}

      {/* Movies */}

      {loading ? (
        <MovieGridSkeleton />
      ) : (
        <>
          <MovieGrid movies={movies} />

          {/* Pagination */}

          <div className="mt-12 flex items-center justify-center gap-4">

            <button
              onClick={() =>
                setPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={page === 1}
              className="
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-6
                py-3
                text-white
                transition
                hover:bg-slate-700
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              ← Previous
            </button>

            <div
              className="
                rounded-xl
                bg-red-600
                px-6
                py-3
                font-bold
                text-white
              "
            >
              {page}
            </div>

            <button
              onClick={() =>
                setPage((prev) => prev + 1)
              }
              className="
                rounded-xl
                bg-red-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-red-700
              "
            >
              Next →
            </button>

          </div>
        </>
      )}
    </div>
    </PageTransition>
  );
}