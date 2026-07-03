import Link from "next/link";
import { FaArrowLeft, FaFilm } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">

        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600/20">
            <FaFilm className="text-5xl text-red-500" />
          </div>
        </div>

        <h1 className="text-8xl font-black text-red-500">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold">
          Movie Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Looks like this movie doesn't exist or has been removed.
          Let's get you back to discovering amazing films.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-red-600
            px-8
            py-4
            font-semibold
            transition
            hover:bg-red-700
          "
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>
    </main>
  );
}