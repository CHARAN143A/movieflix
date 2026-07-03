"use client";

import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:scale-105">
        <FaPlay className="ml-0.5 text-sm" />
      </div>

      <span className="text-lg font-bold tracking-[0.25em] text-white">
        MOVIEFLIX
      </span>
    </Link>
  );
}