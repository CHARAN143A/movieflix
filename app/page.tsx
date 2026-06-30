import SearchInput from "@/components/search/SearchInput";
import MovieCard from "@/components/movie/MovieCard";
import { fetchTrendingMovies } from "@/services/api";

export default async function HomePage() {
  const data = await fetchTrendingMovies();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-red-500">
            MovieFlix
          </h1>

          <p className="mt-3 text-gray-400">
            Discover trending movies from around the world.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-10 max-w-xl">
          <SearchInput />
        </div>

        {/* Trending Movies */}
        <h2 className="mb-6 text-2xl font-semibold">
          Trending Movies
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.results.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}