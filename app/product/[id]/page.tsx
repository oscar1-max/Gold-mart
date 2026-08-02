import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/shop"
            className="mt-5 inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="h-96 w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-bold text-yellow-600">
            {product.price}
          </p>

          <p className="mt-4 text-gray-600">
            ⭐ {product.rating} / 5
          </p>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <button className="mt-8 rounded-lg bg-black px-8 py-3 text-white hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>

      </div>
    </main>
  );
}
