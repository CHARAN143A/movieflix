import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <h1 className="mb-4 text-5xl font-bold">
        🎬 Movie Not Found
      </h1>

      <p className="mb-8 text-slate-400">
        The movie you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
      >
        Back to Home
      </Link>
    </main>
  );
}