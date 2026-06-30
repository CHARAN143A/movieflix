type TrailerProps = {
  videos: any;
};

export default function Trailer({ videos }: TrailerProps) {
  const trailer = videos.results.find(
    (video: any) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  if (!trailer) {
    return (
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Official Trailer
        </h2>

        <p className="text-gray-400">
          No trailer available.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Official Trailer
      </h2>

      <div className="aspect-video overflow-hidden rounded-xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allowFullScreen
        />
      </div>
    </section>
  );
}