"use client";

import { motion } from "framer-motion";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

type MovieGridProps = {
  movies: Movie[];
};

export default function MovieGrid({
  movies,
}: MovieGridProps) {
  if (!movies.length) {
    return (
      <div className="flex h-60 items-center justify-center">
        <p className="text-lg text-gray-400">
          No movies found.
        </p>
      </div>
    );
  }

  return (
    <section
      className="
        grid
        grid-cols-2
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
      "
    >
      {movies.map((movie, index) => (
  <motion.div
    key={movie.id}
    initial={{
      opacity: 0,
      y: 40,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      delay: index * 0.05,
    }}
  >
    <MovieCard movie={movie} />
  </motion.div>
))}
    </section>
  );
}