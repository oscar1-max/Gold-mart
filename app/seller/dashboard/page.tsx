"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
};

export default function SellerDashboard() {
  const [seller, setSeller] = useState<{
    storeName: string;
    email: string;
  } | null>(null);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedSeller = localStorage.getItem("seller");
    const savedProducts = localStorage.getItem("sellerProducts");

    if (savedSeller) {
      setSeller(JSON.parse(savedSeller));
    }

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  if (!seller) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <h1 className="text-2xl font-bold">
            No Seller Account Found
          </h1>

          <Link
            href="/seller/register"
            className="mt-5 inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Become a Seller
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold text-yellow-600">
            Seller Dashboard
          </h1>

          <p className="mt-4">
            <strong>Store:</strong> {seller.storeName}
          </p>

          <p>
            <strong>Email:</strong> {seller.email}
          </p>

          <Link
            href="/seller/products/add"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-yellow-600"
          >
            + Add Product
          </Link>
        </div>


        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">
            My Products
          </h2>

          {products.length === 0 ? (
            <p className="mt-4 text-gray-500">
              No products added yet.
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border p-5"
                >
                  <h3 className="text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-yellow-600 font-bold">
                    {product.price}
                  </p>

                  <p className="text-gray-500">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
      }
