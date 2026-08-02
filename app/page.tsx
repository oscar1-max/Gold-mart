import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <h1 className="max-w-3xl text-5xl font-bold leading-tight">
            Shop Premium Products From Trusted Sellers
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            GoldMart connects buyers and sellers in one modern marketplace.
            Discover quality products with a secure shopping experience.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/shop"
              className="rounded-lg bg-yellow-500 px-8 py-3 font-bold text-black hover:bg-yellow-400"
            >
              Start Shopping
            </Link>

            <Link
              href="/seller/register"
              className="rounded-lg border border-yellow-500 px-8 py-3 font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Become a Seller
            </Link>

          </div>

        </div>
      </section>


      {/* Featured Products */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-3 text-center text-gray-500">
            Explore our best products from trusted sellers.
          </p>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}

          </div>

        </div>

      </section>


      {/* Why GoldMart */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-xl font-bold">
              Trusted Sellers
            </h3>
            <p className="mt-3 text-gray-500">
              Shop from verified marketplace sellers.
            </p>
          </div>


          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-xl font-bold">
              Secure Shopping
            </h3>
            <p className="mt-3 text-gray-500">
              Simple checkout and payment experience.
            </p>
          </div>


          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-xl font-bold">
              Fast Growth
            </h3>
            <p className="mt-3 text-gray-500">
              Built for buyers and sellers worldwide.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
