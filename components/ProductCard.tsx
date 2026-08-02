"use client";

import Image from "next/image";
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
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="mt-2 font-bold text-yellow-600">
          {price}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          ⭐ {rating.toFixed(1)} / 5
        </p>

        <button
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              image,
            })
          }
          className="mt-5 w-full rounded-lg bg-black py-2 text-white transition hover:bg-yellow-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
