"use client";

import Image from "next/image";

type CastListProps = {
  credits: any;
};

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

export default function CastList({
  credits,
}: CastListProps) {
  const cast = credits.cast.slice(0, 12);

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Top Cast
        </h2>

        <span className="text-sm text-gray-400">
          {cast.length} Cast Members
        </span>
      </div>

      {/* Cast Cards */}
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {cast.map((actor: any) => (
          <div
            key={actor.id}
            className="
              group
              min-w-[170px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/80
              backdrop-blur
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-red-500/40
              hover:shadow-xl
              hover:shadow-red-500/10
            "
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE}${actor.profile_path}`
                    : "/placeholder-avatar.png"
                }
                alt={actor.name}
                fill
                sizes="170px"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="space-y-2 p-4">
              <h3 className="line-clamp-1 text-lg font-semibold text-white">
                {actor.name}
              </h3>

              <p className="line-clamp-2 text-sm text-gray-400">
                {actor.character}
              </p>

              <span
                className="
                  inline-block
                  rounded-full
                  bg-red-500/15
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-red-300
                "
              >
                Cast
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}