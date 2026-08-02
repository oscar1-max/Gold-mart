"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Payment = {
  id: number;
  amount: number;
  method: string;
  status: string;
  date: string;
};

export default function ReceiptPage() {
  const [payment, setPayment] = useState<Payment | null>(null);

  useEffect(() => {
    const savedPayment = localStorage.getItem("payment");

    if (savedPayment) {
      setPayment(JSON.parse(savedPayment));
    }
  }, []);

  if (!payment) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p>No payment found.</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-yellow-600">
          GoldMart Receipt
        </h1>

        <div className="mt-8 space-y-4">
          <p>
            <strong>Payment ID:</strong> {payment.id}
          </p>

          <p>
            <strong>Amount:</strong> ${payment.amount.toFixed(2)}
          </p>

          <p>
            <strong>Method:</strong> {payment.method}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className="font-bold text-green-600">
              {payment.status}
            </span>
          </p>

          <p>
            <strong>Date:</strong> {payment.date}
          </p>
        </div>

        <Link
          href="/shop"
          className="mt-8 block rounded-lg bg-black py-3 text-center text-white hover:bg-yellow-600"
        >
          Continue Shopping
        </Link>

      </div>
    </main>
  );
}
