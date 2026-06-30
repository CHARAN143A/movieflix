import { searchMovies } from "@/services/api";
import MovieCard from "@/components/movie/MovieCard";

type Props = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {
  const { query = "" } = await searchParams;

  if (!query) {
    return (
      <main className="mx-auto max-w-7xl p-6 text-white">
        <h1 className="text-3xl font-bold">
          Search Movies
        </h1>

        <p className="mt-4 text-gray-400">
          Enter a movie name to search.
        </p>
      </main>
    );
  }

  const data = await searchMovies(query);

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Results for "{query}"
      </h1>

      {data.results.length === 0 ? (
        <p className="text-gray-400">
          No movies found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </main>
  );
}