import Image from "next/image";
import { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="h-[350px] w-full object-cover"
      />

      <div className="space-y-2 p-4">
        <h2 className="truncate text-lg font-semibold text-white">
          {movie.title}
        </h2>

        <p className="text-sm text-gray-400">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p className="text-sm text-gray-300">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
}