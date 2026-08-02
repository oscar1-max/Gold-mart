"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart, openCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-yellow-500"
        >
          GoldMart
        </Link>


        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">

          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>

          <Link href="/shop" className="hover:text-yellow-500">
            Shop
          </Link>

          <Link href="/seller/dashboard" className="hover:text-yellow-500">
            Seller
          </Link>

          <Link href="/admin" className="hover:text-yellow-500">
            Admin
          </Link>

        </div>


        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={openCart}
            className="rounded-full border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black"
          >
            🛒 {totalItems}
          </button>

          <Link
            href="/login"
            className="rounded-full bg-yellow-500 px-5 py-2 font-bold text-black"
          >
            Account
          </Link>

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="space-y-4 border-t border-gray-700 px-6 py-6 md:hidden">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Shop
          </Link>

          <Link
            href="/seller/dashboard"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Seller
          </Link>

          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Admin
          </Link>


          <button
            onClick={openCart}
            className="w-full rounded-lg border border-yellow-500 py-2"
          >
            🛒 Cart ({totalItems})
          </button>

        </div>
      )}

    </nav>
  );
}
