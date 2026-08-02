"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  items: {
    id: number;
    name: string;
    price: string;
    quantity: number;
  }[];
  total: number;
  date: string;
  status: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8 shadow">
            <p className="text-gray-500">
              No orders yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <h2 className="text-xl font-bold">
                  Order #{order.id}
                </h2>

                <p className="mt-2 text-gray-500">
                  Date: {order.date}
                </p>

                <p className="mt-2 font-semibold">
                  Status: {order.status}
                </p>

                <div className="mt-4 space-y-2">
                  {order.items.map((item) => (
                    <p key={item.id}>
                      {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>

                <p className="mt-5 text-2xl font-bold text-yellow-600">
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
