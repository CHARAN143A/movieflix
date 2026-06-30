export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 animate-pulse">
      {/* Backdrop Skeleton */}
      <div className="h-[400px] w-full bg-slate-800" />

      <div className="mx-auto max-w-7xl p-6">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Poster Skeleton */}
          <div className="h-[450px] w-[300px] rounded-xl bg-slate-800" />

          {/* Details Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="h-10 w-2/3 rounded bg-slate-800" />
            <div className="h-5 w-32 rounded bg-slate-800" />
            <div className="h-5 w-40 rounded bg-slate-800" />

            <div className="space-y-2 pt-4">
              <div className="h-4 w-full rounded bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-800" />
              <div className="h-4 w-5/6 rounded bg-slate-800" />
            </div>

            <div className="flex gap-2 pt-4">
              <div className="h-8 w-20 rounded bg-slate-800" />
              <div className="h-8 w-20 rounded bg-slate-800" />
              <div className="h-8 w-20 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}