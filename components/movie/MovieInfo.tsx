"use client";

import {
  FaStar,
  FaGlobe,
  FaClock,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import { MovieDetails } from "@/types/movie-details";

type MovieInfoProps = {
  movie: MovieDetails;
};

export default function MovieInfo({
  movie,
}: MovieInfoProps) {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Title */}
      <h1 className="mb-6 text-4xl font-black leading-tight text-white lg:text-5xl">
        {movie.title}
      </h1>

      {/* Badges */}
      <div className="mb-8 flex flex-wrap gap-3">

        <span className="flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black">
          <FaStar />
          {movie.vote_average.toFixed(1)}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm">
          <FaCalendarAlt />
          {movie.release_date?.slice(0, 4)}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm">
          <FaClock />
          {hours}h {minutes}m
        </span>

        <span className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm uppercase">
          <FaGlobe />
          {movie.original_language}
        </span>

      </div>

      {/* Genres */}
      <div className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-white">
          Genres
        </h2>

        <div className="flex flex-wrap gap-3">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="
                rounded-full
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-red-300
              "
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          Overview
        </h2>

        <p className="leading-8 text-gray-300">
          {movie.overview}
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-900/60 p-5">
          <div className="mb-2 flex items-center gap-2 text-red-400">
            <FaMoneyBillWave />
            <span className="font-semibold">
              Budget
            </span>
          </div>

          <p className="text-xl font-bold">
            {movie.budget
              ? `$${movie.budget.toLocaleString()}`
              : "Unknown"}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 p-5">
          <div className="mb-2 flex items-center gap-2 text-green-400">
            <FaMoneyBillWave />
            <span className="font-semibold">
              Revenue
            </span>
          </div>

          <p className="text-xl font-bold">
            {movie.revenue
              ? `$${movie.revenue.toLocaleString()}`
              : "Unknown"}
          </p>
        </div>

      </div>
    </div>
  );
}