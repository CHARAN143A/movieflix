"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import { searchSuggestions } from "@/services/api";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        const movies = await searchSuggestions(query);
        setResults(movies);
      } catch {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setExpanded(false);
        setResults([]);
      }
    }

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);

    setExpanded(false);
    setResults([]);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative hidden lg:block"
    >
      <form onSubmit={handleSubmit}>
        <div
          className={`flex items-center overflow-hidden rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 ${
            expanded ? "w-72" : "w-11"
          }`}
        >
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="flex h-11 w-11 items-center justify-center text-gray-300"
          >
            <FaSearch />
          </button>

          {expanded && (
            <>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Search movies..."
                className="flex-1 bg-transparent text-white outline-none"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                  }}
                  className="px-4 text-gray-400"
                >
                  <FaTimes />
                </button>
              )}
            </>
          )}
        </div>
      </form>

      {expanded && results.length > 0 && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
          {results.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              onClick={() => {
                setExpanded(false);
                setQuery("");
                setResults([]);
              }}
              className="block border-b border-slate-800 px-4 py-3 transition hover:bg-slate-800"
            >
              <p className="font-medium text-white">
                {movie.title}
              </p>

              <p className="text-xs text-gray-400">
                {movie.release_date}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}