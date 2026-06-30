import MovieCard from "@/components/movie/MovieCard";

type SimilarMoviesProps = {
  movies: any[];
};

export default function SimilarMovies({
  movies,
}: SimilarMoviesProps) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Similar Movies
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.slice(0, 8).map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}