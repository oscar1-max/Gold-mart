"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);


  const placeOrder = async () => {
    setLoading(true);

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        items: cart,
        total,
      }),
    });


    if (response.status === 401) {
      router.push("/login");
      return;
    }


    if (!response.ok) {
      alert("Order failed");
      setLoading(false);
      return;
    }


    alert("Order created. Continue to payment.");

    router.push("/payment");
  };


  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold">
          Checkout
        </h1>


        <div className="mt-8 space-y-4">

          {cart.length === 0 ? (

            <p className="text-gray-500">
              Your cart is empty.
            </p>

          ) : (

            cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between border-b pb-3"
              >

                <p>
                  {item.name} × {item.quantity}
                </p>


                <p>
                  {item.price}
                </p>

              </div>

            ))

          )}

        </div>


        <div className="mt-8 text-2xl font-bold">
          Total: ${total.toFixed(2)}
        </div>


        <button
          onClick={placeOrder}
          disabled={loading}
          className="mt-8 w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-600 disabled:opacity-50"
        >
          {loading ? "Creating Order..." : "Continue to Payment"}
        </button>


      </div>
    </main>
  );
}
