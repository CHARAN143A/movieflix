import { FaUserCircle, FaStar } from "react-icons/fa";

type ReviewsProps = {
  reviews: any;
};

export default function Reviews({
  reviews,
}: ReviewsProps) {
  if (!reviews.results.length) {
    return (
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Reviews
        </h2>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-gray-400">
          No reviews available.
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Reviews
      </h2>

      <div className="space-y-6">
        {reviews.results.slice(0, 3).map((review: any) => (
          <article
            key={review.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaUserCircle
                  size={42}
                  className="text-gray-500"
                />

                <div>
                  <h3 className="font-semibold text-white">
                    {review.author}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {new Date(
                      review.created_at
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {review.author_details.rating && (
                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">
                  <FaStar />
                  {review.author_details.rating}
                </div>
              )}
            </div>

            <p className="line-clamp-5 leading-7 text-gray-300">
              {review.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}