type ProductCardProps = {
  name: string;
  price: string;
  rating: number;
};

export default function ProductCard({
  name,
  price,
  rating,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-xl">
      <div className="h-44 rounded-xl bg-gray-200"></div>

      <h3 className="mt-4 text-lg font-semibold">{name}</h3>

      <p className="mt-2 text-yellow-600 font-bold">{price}</p>

      <p className="mt-2 text-sm text-gray-500">
        ⭐ {rating.toFixed(1)} / 5
      </p>

      <button className="mt-5 w-full rounded-lg bg-black py-2 text-white hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  );
}
