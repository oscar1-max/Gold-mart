import { reviews } from "@/data/reviews";

type ReviewsProps = {
  productId: number;
};

export default function Reviews({ productId }: ReviewsProps) {
  const productReviews = reviews.filter(
    (review) => review.productId === productId
  );

  if (productReviews.length === 0) {
    return (
      <div className="mt-10 rounded-xl bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">
          Customer Reviews
        </h2>

        <p className="mt-3 text-gray-500">
          No reviews yet.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-10 rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">
        Customer Reviews
      </h2>

      <div className="mt-6 space-y-5">
        {productReviews.map((review) => (
          <div
            key={review.id}
            className="border-b pb-4 last:border-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">
                {review.user}
              </h3>

              <span>
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
