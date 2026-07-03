"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaFilm,
  FaHeart,
  FaBookmark,
} from "react-icons/fa";

import { MdLiveTv } from "react-icons/md";

const links = [
  {
    name: "HOME",
    href: "/",
    icon: FaHome,
  },
  {
    name: "MOVIES",
    href: "/movies",
    icon: FaFilm,
  },
  {
    name: "TV SHOWS",
    href: "/tv-shows",
    icon: MdLiveTv,
  },
  {
    name: "FAVORITES",
    href: "/favorites",
    icon: FaHeart,
  },
  {
    name: "WATCHLIST",
    href: "/watchlist",
    icon: FaBookmark,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => {
        const Icon = link.icon;
        const active = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className="group relative flex items-center gap-2"
          >
            <Icon
              className={`text-sm transition ${
                active
                  ? "text-white"
                  : "text-gray-400 group-hover:text-white"
              }`}
            />

            <span
              className={`text-xs font-semibold tracking-[0.18em] transition ${
                active
                  ? "text-white"
                  : "text-gray-300 group-hover:text-white"
              }`}
            >
              {link.name}
            </span>

            <span
              className={`absolute -bottom-3 left-0 h-[2px] bg-white transition-all duration-300 ${
                active
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}