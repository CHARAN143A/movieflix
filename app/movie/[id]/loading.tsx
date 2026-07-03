export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 animate-pulse">

      {/* Hero */}
      <div className="h-[70vh] bg-slate-900" />

      <div className="mx-auto -mt-40 max-w-7xl px-6 pb-20">

        <div className="flex flex-col gap-10 lg:flex-row">

          {/* Poster */}
          <div className="h-[470px] w-[320px] rounded-3xl bg-slate-800" />

          {/* Info */}
          <div className="flex-1 rounded-3xl bg-slate-900 p-8">

            <div className="mb-6 h-12 w-2/3 rounded bg-slate-800" />

            <div className="mb-3 h-5 w-32 rounded bg-slate-800" />
            <div className="mb-3 h-5 w-40 rounded bg-slate-800" />
            <div className="mb-3 h-5 w-48 rounded bg-slate-800" />

            <div className="mt-8 space-y-3">
              <div className="h-4 rounded bg-slate-800" />
              <div className="h-4 rounded bg-slate-800" />
              <div className="h-4 w-5/6 rounded bg-slate-800" />
            </div>

          </div>

        </div>

        <div className="mt-20 h-80 rounded-3xl bg-slate-900" />

      </div>

    </main>
  );
}