"use client";

import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg text-center">

        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-600/20">
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </div>

        <h1 className="text-5xl font-black">
          Something went wrong
        </h1>

        <p className="mt-6 leading-8 text-gray-400">
          We couldn't load this page right now.
          Please try again.
        </p>

        <button
          onClick={reset}
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
          <FaRedo />
          Try Again
        </button>

      </div>
    </main>
  );
}