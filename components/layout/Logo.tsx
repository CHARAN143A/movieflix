import Link from "next/link";
import { FaFilm } from "react-icons/fa";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <FaFilm className="text-3xl text-red-600" />

      <h1 className="text-2xl font-bold text-white">
        Movie<span className="text-red-600">Flix</span>
      </h1>
    </Link>
  );
}