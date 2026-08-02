"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart, openCart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 border-b bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-yellow-500"
        >
          GoldMart
        </Link>


        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="hover:text-yellow-500"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:text-yellow-500"
          >
            Shop
          </Link>

          <Link
            href="/seller/dashboard"
            className="hover:text-yellow-500"
          >
            Seller
          </Link>

          <Link
            href="/admin"
            className="hover:text-yellow-500"
          >
            Admin
          </Link>

        </div>


        {/* Actions */}
        <div className="flex items-center gap-3">

          <button
            className="rounded-full border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black"
          >
            ❤️
          </button>


          <button
            onClick={openCart}
            className="rounded-full border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black"
          >
            🛒 {totalItems}
          </button>


          <Link
            href="/login"
            className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black hover:bg-yellow-400"
          >
            Account
          </Link>

        </div>

      </div>
    </nav>
  );
}
