"use client";

import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

export default function MovieRow({
  title,
  movies,
}: Props) {
  if (!movies.length) return null;

  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <button className="text-sm text-red-400 hover:text-red-300">
          View All →
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
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