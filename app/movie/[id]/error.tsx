"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <h1 className="mb-4 text-4xl font-bold">
        Something went wrong 😢
      </h1>

      <p className="mb-8 text-center text-slate-400">
        We couldn't load the movie details.
      </p>

      <button
        onClick={reset}
        className="rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
      >
        Try Again
      </button>
    </main>
  );
}