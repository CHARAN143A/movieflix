import MovieInfo from "@/components/movie/MovieInfo";
import Trailer from "@/components/movie/Trailer";
import { notFound } from "next/navigation";//
import Image from "next/image";
import { getMovieDetails, getSimilarMovies ,getMovieVideos, getMovieCredits} from "@/services/api";

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

  if (!movie || movie.success === false) {//
  notFound();
}

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Backdrop */}
      <div className="relative h-[400px]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl p-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-xl"
          />

          <div className="space-y-4">
            <MovieInfo movie={movie} />
            <Trailer videos={videos} />
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="rounded bg-red-600 px-3 py-1 text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}