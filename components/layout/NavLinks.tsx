"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "Favorites", href: "/favorites" },
  { name: "Watchlist", href: "/watchlist" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "text-sm font-medium transition-colors duration-200 hover:text-red-500",
            pathname === link.href ? "text-red-500" : "text-white"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}