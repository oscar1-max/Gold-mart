"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellerRegisterPage() {
  const router = useRouter();

  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem(
      "seller",
      JSON.stringify({
        storeName,
        email,
      })
    );

    router.push("/seller/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-yellow-600">
          Become a Seller
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Start selling on GoldMart
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block font-medium">
              Store Name
            </label>

            <input
              type="text"
              placeholder="My Store"
              value={storeName}
              onChange={(e) =>
                setStoreName(e.target.value)
              }
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Seller Email
            </label>

            <input
              type="email"
              placeholder="seller@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-yellow-600"
          >
            Create Seller Account
          </button>
        </form>

      </div>
    </main>
  );
              }
