"use client";

import { FaSortAmountDown } from "react-icons/fa";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full md:w-64">
      <FaSortAmountDown className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-red-400" />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          appearance-none
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          py-3
          pl-12
          pr-10
          text-white
          outline-none
          transition-all
          duration-300
          hover:border-red-500
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/30
        "
      >
        <option value="popularity.desc">
          Most Popular
        </option>

        <option value="vote_average.desc">
          Highest Rated
        </option>

        <option value="release_date.desc">
          Newest Releases
        </option>

        <option value="original_title.asc">
          Title (A-Z)
        </option>
      </select>

      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        ▼
      </span>
    </div>
  );
}