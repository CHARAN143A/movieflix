"use client";

import { FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
  videoKey: string;
};

export default function TrailerModal({
  open,
  onClose,
  videoKey,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 p-4">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-3 text-white transition hover:bg-red-600"
        >
          <FaTimes />
        </button>

        <div className="aspect-video overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}