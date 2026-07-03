"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaStar,
  FaPlay,
} from "react-icons/fa";

import { Movie } from "@/types/movie";
import { useFavorites } from "@/hooks/useFavorites";
import { useWatchlist } from "@/hooks/useWatchlist";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const { watchlist, toggleWatchlist } = useWatchlist();

  const isFavorite = favorites.includes(movie.id);
  const isWatchlisted = watchlist.includes(movie.id);

  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.article
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.25,
        }}
        className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20"
      >
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.png"
            }
            alt={movie.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(movie.id);
            }}
            className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-3"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWatchlist(movie.id);
            }}
            className="absolute left-3 top-3 z-20 rounded-full bg-black/60 p-3"
          >
            {isWatchlisted ? (
              <FaBookmark className="text-yellow-400" />
            ) : (
              <FaRegBookmark className="text-white" />
            )}
          </button>

          <div className="absolute bottom-24 right-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 opacity-0 transition group-hover:opacity-100">
            <FaStar className="text-yellow-400" />
            {movie.vote_average.toFixed(1)}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 transition group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 font-semibold">
              <FaPlay />
              View Details
            </span>
          </div>
        </div>

        <div className="space-y-3 p-5">
          <h2 className="line-clamp-1 text-lg font-bold transition group-hover:text-red-400">
            {movie.title}
          </h2>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">
              {movie.release_date?.slice(0, 4)}
            </span>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-wider text-gray-400">
              Movie
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}