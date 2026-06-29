import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

type MovieGridProps = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  );
}