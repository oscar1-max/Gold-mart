"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  const completePayment = () => {
    const payment = {
      id: Date.now(),
      amount: total,
      method: "Card Payment",
      status: "Successful",
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "payment",
      JSON.stringify(payment)
    );

    alert("Payment successful!");

    router.push("/receipt");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold">
          Payment
        </h1>

        <p className="mt-6 text-center text-2xl font-bold text-yellow-600">
          Total: ${total.toFixed(2)}
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full rounded-lg border px-4 py-3"
          />

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full rounded-lg border px-4 py-3"
            />

            <input
              type="text"
              placeholder="CVV"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>
        </div>

        <button
          onClick={completePayment}
          className="mt-8 w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-600"
        >
          Pay Now
        </button>

      </div>
    </main>
  );
}
