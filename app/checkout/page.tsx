"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleDateString(),
      status: "Processing",
    };

    const oldOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    alert("Order placed successfully!");

    router.push("/orders");
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
          className="mt-8 w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-600"
        >
          Place Order
        </button>

      </div>
    </main>
  );
}
