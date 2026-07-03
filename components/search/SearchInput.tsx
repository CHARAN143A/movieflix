"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      router.push(
        `/search?query=${encodeURIComponent(debouncedQuery)}`
      );
    }
  }, [debouncedQuery, router]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-red-500"
    />
  );
}