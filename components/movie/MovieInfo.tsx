import { MovieDetails } from "@/types/movie-details";

type MovieInfoProps = {
  movie: MovieDetails;
};

export default function MovieInfo({ movie }: MovieInfoProps) {
  return (
    <div className="space-y-5">
      {/* Title */}
      <h1 className="text-4xl font-bold">{movie.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-xl">⭐</span>
        <span>{movie.vote_average.toFixed(1)} / 10</span>
      </div>

      {/* Release Date */}
      <p>
        <span className="font-semibold">📅 Release Date:</span>{" "}
        {movie.release_date}
      </p>

      {/* Runtime */}
      <p>
        <span className="font-semibold">⏱ Runtime:</span>{" "}
        {movie.runtime} min
      </p>

      {/* Language */}
      <p>
        <span className="font-semibold">🌍 Language:</span>{" "}
        {movie.original_language.toUpperCase()}
      </p>

      {/* Budget */}
      <p>
        <span className="font-semibold">💰 Budget:</span>{" "}
        ${movie.budget.toLocaleString()}
      </p>

      {/* Revenue */}
      <p>
        <span className="font-semibold">💵 Revenue:</span>{" "}
        ${movie.revenue.toLocaleString()}
      </p>

      {/* Genres */}
      <div>
        <h2 className="mb-2 font-semibold">🎭 Genres</h2>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre: any) => (
            <span
              key={genre.id}
              className="rounded-full bg-red-600 px-4 py-1 text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Overview</h2>

        <p className="leading-7 text-gray-300">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}