const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: "$99",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center">
          Featured Products
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-40 rounded-lg bg-gray-200"></div>

              <h3 className="mt-4 text-lg font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-yellow-600 font-bold">
                {product.price}
              </p>

              <button className="mt-4 w-full rounded-lg bg-black py-2 text-white hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
