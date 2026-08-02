"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { products } from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

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

        <CategoryFilter
          category={category}
          setCategory={setCategory}
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
