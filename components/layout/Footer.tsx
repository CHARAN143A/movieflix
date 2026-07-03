import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-gray-400 md:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-white">
            MovieFlix
          </h2>
          <p className="mt-2">
            Discover trending movies and TV shows.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>

          <Link href="/favorites" className="hover:text-red-500">
            Favorites
          </Link>

          <Link href="/watchlist" className="hover:text-red-500">
            Watchlist
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          © {new Date().getFullYear()} MovieFlix
          <br />
          Built with Next.js & TMDB API
        </div>
      </div>
    </footer>
  );
}