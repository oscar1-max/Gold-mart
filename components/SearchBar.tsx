"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto flex max-w-3xl gap-3 px-6 py-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border px-5 py-3 outline-none focus:border-yellow-500"
      />

      <button
        className="rounded-lg bg-black px-8 py-3 text-white transition hover:bg-yellow-600"
      >
        Search
      </button>
    </div>
  );
}
