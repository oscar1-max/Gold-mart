"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("sellerProducts") || "[]"
    );

    const product = savedProducts.find(
      (item: any) => item.id === id
    );

    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setDescription(product.description);
    }
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    const savedProducts = JSON.parse(
      localStorage.getItem("sellerProducts") || "[]"
    );

    const updatedProducts = savedProducts.map(
      (product: any) =>
        product.id === id
          ? {
              ...product,
              name,
              price,
              category,
              description,
            }
          : product
    );

    localStorage.setItem(
      "sellerProducts",
      JSON.stringify(updatedProducts)
    );

    router.push("/seller/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-yellow-600">
          Edit Product
        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-8 space-y-5"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Product name"
          />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Price"
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-32 w-full rounded-lg border px-4 py-3"
            placeholder="Description"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-600"
          >
            Save Changes
          </button>
        </form>

      </div>
    </main>
  );
}
