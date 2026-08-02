"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      description,
      rating: 5,
      image: "/images/product.jpg",
    };

    const oldProducts =
      JSON.parse(localStorage.getItem("sellerProducts") || "[]");

    localStorage.setItem(
      "sellerProducts",
      JSON.stringify([...oldProducts, newProduct])
    );

    router.push("/seller/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-yellow-600">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            placeholder="Price e.g $50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Gaming</option>
          </select>

          <textarea
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="h-32 w-full rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-yellow-600"
          >
            Add Product
          </button>
        </form>

      </div>
    </main>
  );
          }
