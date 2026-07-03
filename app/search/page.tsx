import MovieGrid from "@/components/movie/MovieGrid";
import { searchMovies } from "@/services/api";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q = "" } = await searchParams;

  if (!q.trim()) {
    return (
      <main className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Search
        </p>

        <h1 className="text-5xl font-black text-white">
          Find Your Favorite Movies
        </h1>

        <p className="mt-5 max-w-xl text-lg text-gray-400">
          Use the search icon in the navigation bar to search
          thousands of movies from TMDB.
        </p>

      </main>
    );
  }

  const data = await searchMovies(q);

  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12">

      {/* Heading */}

      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Search Results
          </p>

          <h1 className="text-5xl font-black text-white">
            "{q}"
          </h1>

          <p className="mt-4 text-gray-400">
            Found{" "}
            <span className="font-semibold text-white">
              {data.results.length}
            </span>{" "}
            movies
          </p>

        </div>

      </div>

      {data.results.length === 0 ? (

        <div className="flex h-80 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">

          <div className="text-center">

            <h2 className="mb-3 text-3xl font-bold text-white">
              No Results Found
            </h2>

            <p className="text-gray-400">
              Try another movie title.
            </p>

          </div>

        </div>

      ) : (

        <MovieGrid movies={data.results} />

      )}

    </main>
  );
}