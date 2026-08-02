"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SellerDashboard() {
  const [seller, setSeller] = useState<{
    storeName: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const savedSeller = localStorage.getItem("seller");

    if (savedSeller) {
      setSeller(JSON.parse(savedSeller));
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
            className="mt-5 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-yellow-600"
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

          <div className="mt-6 space-y-3">
            <p>
              <strong>Store:</strong> {seller.storeName}
            </p>

            <p>
              <strong>Email:</strong> {seller.email}
            </p>
          </div>

          <Link
            href="/seller/products/add"
            className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-yellow-600"
          >
            + Add Product
          </Link>
        </div>

      </div>
    </main>
  );
}
