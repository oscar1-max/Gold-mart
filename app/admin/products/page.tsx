"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem(
      "sellerProducts"
    );

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    localStorage.setItem(
      "sellerProducts",
      JSON.stringify(updatedProducts)
    );

    setProducts(updatedProducts);
  };

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-yellow-600">
          Manage Products
        </h1>

        {products.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8">
            <p className="text-gray-500">
              No products found.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-2 font-bold text-yellow-600">
                  {product.price}
                </p>

                <p className="text-gray-500">
                  {product.category}
                </p>

                <button
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                  className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Remove Product
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
