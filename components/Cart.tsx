"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Shopping Cart</h2>

        <div className="mt-8 rounded-xl border bg-white p-10 text-center">
          <p className="text-lg text-gray-500">
            Your cart is empty.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>

      <div className="mt-8 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border p-5"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-600">
                {item.price} × {item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-black p-6 text-white">
        <h3 className="text-2xl font-bold">
          Total: ${total.toFixed(2)}
        </h3>

        <button className="mt-5 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}
