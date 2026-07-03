"use client";

import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/types/movie";

type SimilarMoviesProps = {
  movies: Movie[];
};

export default function SimilarMovies({
  movies,
}: SimilarMoviesProps) {
  if (!movies?.length) return null;

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Similar Movies
        </h2>

        <span className="text-sm text-gray-400">
          {Math.min(movies.length, 10)} Recommendations
        </span>
      </div>

      {/* Horizontal Carousel */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {movies.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            className="min-w-[250px] max-w-[250px] flex-shrink-0"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}