"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaFilm,
  FaHeart,
  FaBookmark,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const links = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Movies",
    href: "/movies",
    icon: FaFilm,
  },
  {
    name: "TV Shows",
    href: "/tv-shows",
    icon: MdLiveTv,
  },
  {
    name: "Favorites",
    href: "/favorites",
    icon: FaHeart,
  },
  {
    name: "Watchlist",
    href: "/watchlist",
    icon: FaBookmark,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: FaUser,
  },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await signOut(auth);
    setOpen(false);
  }

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="text-2xl text-white lg:hidden"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-slate-950 border-r border-slate-800 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-5">
          <h2 className="text-lg font-bold tracking-widest text-white">
            MOVIEFLIX
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-4 flex flex-col">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 px-6 py-4 transition ${
                  pathname === link.href
                    ? "bg-slate-800 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="text-lg" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 w-full border-t border-slate-800 p-5">
          {user ? (
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-white transition hover:bg-red-700"
            >
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-blue-600 px-4 py-3 text-center text-white transition hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}