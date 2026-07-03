import Image from "next/image";
import { notFound } from "next/navigation";

import MovieInfo from "@/components/movie/MovieInfo";
import Trailer from "@/components/movie/Trailer";
import CastList from "@/components/movie/CastList";
import SimilarMovies from "@/components/movie/SimilarMovies";

import {
  getMovieCredits,
  getMovieDetails,
  getMovieVideos,
  getSimilarMovies,
} from "@/services/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailsPage({
  params,
}: Props) {
  const { id } = await params;

const movie = await getMovieDetails(id);

if (!movie) {
  notFound();
}

const [videos, credits, similar] =
  await Promise.all([
    getMovieVideos(id),
    getMovieCredits(id),
    getSimilarMovies(id),
  ]);

  if (!movie || movie.success === false) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[70vh] min-h-[550px] overflow-hidden">

        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* overlays */}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </section>

      {/* ================= CONTENT ================= */}

      <div className="mx-auto -mt-32 max-w-7xl px-6 pb-20">

        <div className="flex flex-col gap-10 lg:flex-row">

          {/* Poster */}

        {/* ================= POSTER ================= */}

<div className="flex justify-center lg:block lg:sticky lg:top-24 self-start">
  <div className="w-[260px] sm:w-[300px] lg:w-[320px]">
    <Image
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "/placeholder.png"
      }
      alt={movie.title}
      width={320}
      height={480}
      priority
      className="
        h-auto
        w-full
        rounded-3xl
        border
        border-white/10
        shadow-2xl
        shadow-black/70
        transition-all
        duration-500
        hover:scale-105
        hover:-rotate-1
        hover:shadow-red-500/20
      "
    />
  </div>
</div>

          {/* Info */}

          <div className="flex-1">

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <MovieInfo movie={movie} />
            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Trailer */}

        <Trailer videos={videos} />

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Cast */}

        <CastList credits={credits} />

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Similar */}

        <SimilarMovies movies={similar.results} />

      </div>

    </main>
  );
}