import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/movie/Hero";
import MovieGrid from "@/components/movie/MovieGrid";
import { fetchTrendingMovies } from "@/services/api";

export default async function Home() {
  const data = await fetchTrendingMovies();

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Trending Movies
        </h2>

        <MovieGrid movies={data.results} />
      </section>
    </main>
  );
}