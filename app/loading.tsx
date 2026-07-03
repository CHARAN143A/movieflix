import MovieGridSkeleton from "@/components/ui/MovieGridSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-screen-2xl px-6 py-10">

        {/* Hero Skeleton */}
        <div className="mb-16 h-[75vh] animate-pulse rounded-3xl bg-slate-900" />

        {/* Section Title */}
        <div className="mb-10 space-y-3">
          <div className="h-4 w-28 rounded bg-slate-800" />
          <div className="h-10 w-80 rounded bg-slate-800" />
          <div className="h-5 w-2/3 rounded bg-slate-800" />
        </div>

        {/* Grid */}
        <MovieGridSkeleton />

      </div>
    </main>
  );
}