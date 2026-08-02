"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { products } from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold">
          Shop All Products
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Discover premium products from trusted sellers.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
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
    </main>
  );
}
