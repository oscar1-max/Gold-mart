"use client";

import { useEffect, useState } from "react";

type Seller = {
  storeName: string;
  email: string;
};

export default function AdminUsersPage() {
  const [seller, setSeller] = useState<Seller | null>(null);

  useEffect(() => {
    const savedSeller = localStorage.getItem("seller");

    if (savedSeller) {
      setSeller(JSON.parse(savedSeller));
    }
  }, []);

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold text-yellow-600">
          Manage Users
        </h1>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Sellers
          </h2>

          {!seller ? (
            <p className="mt-4 text-gray-500">
              No sellers registered yet.
            </p>
          ) : (
            <div className="mt-5 rounded-xl border p-5">

              <p>
                <strong>Store:</strong>{" "}
                {seller.storeName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {seller.email}
              </p>

              <button
                className="mt-5 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                onClick={() => {
                  localStorage.removeItem("seller");
                  setSeller(null);
                }}
              >
                Remove Seller
              </button>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}
