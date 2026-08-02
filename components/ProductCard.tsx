"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  rating,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>


      <div className="p-5">

        <h3 className="text-xl font-bold">
          {name}
        </h3>


        <p className="mt-3 text-2xl font-bold text-yellow-600">
          {price}
        </p>


        <p className="mt-2 text-sm text-gray-500">
          ⭐ {rating.toFixed(1)} / 5
        </p>


        <div className="mt-5 flex gap-3">

          <button
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                image,
              })
            }
            className="flex-1 rounded-lg bg-black py-2 text-white hover:bg-yellow-600"
          >
            Add Cart
          </button>


          <Link
            href={`/products/${id}`}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}
