import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-slate-900">
      <Container>
        <div className="flex h-[80vh] items-center">
          <div className="max-w-2xl space-y-6">
            <span className="rounded bg-red-600 px-3 py-1 text-sm text-white">
              Featured Movie
            </span>

            <h1 className="text-5xl font-bold text-white">
              Avengers: Endgame
            </h1>

            <p className="text-lg text-gray-300">
              After the devastating events of Infinity War, the Avengers
              assemble once more to reverse Thanos' actions and restore
              balance to the universe.
            </p>

            <div className="flex gap-4">
              <button className="rounded bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                ▶ Watch Now
              </button>

              <button className="rounded border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                ℹ More Info
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}