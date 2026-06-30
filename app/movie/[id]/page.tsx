import Image from "next/image";
import { notFound } from "next/navigation";

import MovieInfo from "@/components/movie/MovieInfo";
import Trailer from "@/components/movie/Trailer";
import CastList from "@/components/movie/CastList";
import SimilarMovies from "@/components/movie/SimilarMovies";

import {
  getMovieDetails,
  getMovieVideos,
  getMovieCredits,
  getSimilarMovies,
} from "@/services/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetails({ params }: Props) {
  const { id } = await params;

  const [movie, videos, credits, similar] = await Promise.all([
    getMovieDetails(id),
    getMovieVideos(id),
    getMovieCredits(id),
    getSimilarMovies(id),
  ]);

  if (!movie || movie.success === false) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Backdrop */}
      <div className="relative h-[400px] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Poster + Movie Details */}
        <div className="flex flex-col gap-10 md:flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-xl shadow-lg"
          />

          <div className="flex-1 space-y-6">
            <MovieInfo movie={movie} />

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-red-600 px-4 py-1 text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trailer */}
        <section className="mt-16">
          <Trailer videos={videos} />
        </section>

        {/* Cast */}
        <section className="mt-16">
          <CastList credits={credits} />
        </section>

        {/* Similar Movies */}
        <section className="mt-16">
          <SimilarMovies movies={similar.results} />
        </section>
      </div>
    </main>
  );
}