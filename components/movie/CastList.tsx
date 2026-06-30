import Image from "next/image";

type CastListProps = {
  credits: any;
};

const IMAGE_BASE = "https://image.tmdb.org/t/p/w185";

export default function CastList({ credits }: CastListProps) {
  const cast = credits.cast.slice(0, 10);

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Top Cast
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {cast.map((actor: any) => (
          <div
            key={actor.id}
            className="min-w-[150px] text-center"
          >
            <Image
              src={
                actor.profile_path
                  ? `${IMAGE_BASE}${actor.profile_path}`
                  : "/placeholder-avatar.png"
              }
              alt={actor.name}
              width={150}
              height={225}
              className="rounded-xl"
            />

            <h3 className="mt-3 font-semibold text-white">
              {actor.name}
            </h3>

            <p className="text-sm text-gray-400">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}