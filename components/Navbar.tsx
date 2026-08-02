"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { cart, openCart } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-600">
          GoldMart
        </h1>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">
          <a href="#" className="font-medium hover:text-yellow-600">
            Home
          </a>

          <a href="#" className="font-medium hover:text-yellow-600">
            Shop
          </a>

          <a href="#" className="font-medium hover:text-yellow-600">
            Categories
          </a>

          <a href="#" className="font-medium hover:text-yellow-600">
            Sellers
          </a>

          <a href="#" className="font-medium hover:text-yellow-600">
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-full border px-4 py-2 hover:bg-gray-100">
            ❤️ Wishlist
          </button>

          <button
            onClick={openCart}
            className="rounded-full border px-4 py-2 hover:bg-gray-100"
          >
            🛒 Cart ({totalItems})
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-4 py-2 text-white">
                👤 {user.name}
              </span>

              <button
                onClick={logout}
                className="rounded-full bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-black px-5 py-2 text-white hover:bg-yellow-600"
            >
              👤 Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
