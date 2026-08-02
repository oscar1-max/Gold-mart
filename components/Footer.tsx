import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            GoldMart
          </h2>

          <p className="mt-4 text-gray-400">
            A modern marketplace connecting buyers and trusted sellers.
          </p>
        </div>


        {/* Shop */}
        <div>
          <h3 className="text-xl font-bold">
            Shop
          </h3>

          <div className="mt-4 space-y-3 text-gray-400">

            <Link
              href="/shop"
              className="block hover:text-yellow-500"
            >
              All Products
            </Link>

            <Link
              href="/categories"
              className="block hover:text-yellow-500"
            >
              Categories
            </Link>

            <Link
              href="/orders"
              className="block hover:text-yellow-500"
            >
              My Orders
            </Link>

          </div>
        </div>


        {/* Seller */}
        <div>
          <h3 className="text-xl font-bold">
            Seller
          </h3>

          <div className="mt-4 space-y-3 text-gray-400">

            <Link
              href="/seller/register"
              className="block hover:text-yellow-500"
            >
              Become a Seller
            </Link>

            <Link
              href="/seller/dashboard"
              className="block hover:text-yellow-500"
            >
              Seller Dashboard
            </Link>

          </div>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold">
            Contact
          </h3>

          <p className="mt-4 text-gray-400">
            Email: support@goldmart.com
          </p>

          <p className="mt-2 text-gray-400">
            Fast and secure marketplace shopping.
          </p>

        </div>

      </div>


      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} GoldMart. All rights reserved.
      </div>

    </footer>
  );
            }
