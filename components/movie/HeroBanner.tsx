"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaPlay,
  FaHeart,
  FaBookmark,
  FaStar,
  FaInfoCircle,
  FaGlobe,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { Movie } from "@/types/movie";
import { useFavorites } from "@/hooks/useFavorites";
import { useWatchlist } from "@/hooks/useWatchlist";

type Props = {
  movie: Movie;
};

export default function HeroBanner({
  movie,
}: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const { watchlist, toggleWatchlist } = useWatchlist();

  const isFavorite = favorites.includes(movie.id);
  const isWatchlisted = watchlist.includes(movie.id);

  return (
    <section className="relative mb-16 h-[80vh] min-h-[620px] overflow-hidden rounded-3xl">

      {/* Background */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 transition-transform duration-[12000ms] hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute inset-0 flex items-center"
      >
        <div className="max-w-2xl px-8 lg:px-16">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-red-500">
            MovieFlix Original
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            {movie.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-300">

            <span className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur">
              <FaStar className="text-yellow-400" />
              {movie.vote_average.toFixed(1)}
            </span>

            <span>
              {movie.release_date?.slice(0, 4)}
            </span>

            <span className="rounded-full border border-white/20 px-3 py-1">
              HD
            </span>

            <span className="flex items-center gap-2">
              <FaGlobe />
              {movie.original_language.toUpperCase()}
            </span>

          </div>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-300 line-clamp-3">
            {movie.overview}
          </p>

          <div className="flex flex-wrap gap-4">

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
            >
              <Link
                href={`/movie/${movie.id}`}
                className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900"
              >
                <FaPlay />
                Watch Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
            >
              <Link
                href={`/movie/${movie.id}`}
                className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur"
              >
                <FaInfoCircle />
                More Info
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: .9 }}
              onClick={() => toggleFavorite(movie.id)}
              className="rounded-full border border-white/20 bg-black/40 p-4 backdrop-blur"
            >
              <FaHeart
                className={
                  isFavorite
                    ? "text-red-500"
                    : "text-white"
                }
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: .9 }}
              onClick={() => toggleWatchlist(movie.id)}
              className="rounded-full border border-white/20 bg-black/40 p-4 backdrop-blur"
            >
              <FaBookmark
                className={
                  isWatchlisted
                    ? "text-yellow-400"
                    : "text-white"
                }
              />
            </motion.button>

          </div>

        </div>
      </motion.div>
    </section>
  );
}