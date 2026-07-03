"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import TrailerModal from "./TrailerModal";

type TrailerProps = {
  videos: any;
};

export default function Trailer({ videos }: TrailerProps) {
  const [open, setOpen] = useState(false);

  const trailer = videos.results.find(
    (video: any) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  if (!trailer) {
    return (
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Official Trailer
        </h2>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <p className="text-gray-400">
            No trailer available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Official Trailer
        </h2>

        {/* Trailer Thumbnail */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={`https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`}
            alt={trailer.name}
            className="h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-red-700"
            >
              <FaPlay />
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      <TrailerModal
        open={open}
        onClose={() => setOpen(false)}
        videoKey={trailer.key}
      />
    </>
  );
}