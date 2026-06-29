"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    console.log("Searching for:", search);

    // Later we'll navigate to:
    // /search?query=search
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2">
      <FaSearch className="text-gray-400" />

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-48 bg-transparent text-white placeholder:text-gray-400 outline-none"
      />

      <button
        onClick={handleSearch}
        className="rounded bg-red-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-700"
      >
        Search
      </button>
    </div>
  );
}