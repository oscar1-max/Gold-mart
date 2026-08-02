"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  total: number;
  status: string;
  date: string;
};

const statuses = [
  "Processing",
  "Shipped",
  "Delivered",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const changeStatus = (id: number) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        const current =
          statuses.indexOf(order.status);

        return {
          ...order,
          status:
            statuses[
              Math.min(current + 1, 2)
            ],
        };
      }

      return order;
    });

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-yellow-600">
          Manage Orders
        </h1>

        {orders.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8">
            <p className="text-gray-500">
              No orders found.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <h2 className="text-xl font-bold">
                  Order #{order.id}
                </h2>

                <p className="mt-2">
                  Date: {order.date}
                </p>

                <p className="mt-2">
                  Total: ${order.total}
                </p>

                <p className="mt-2">
                  Status:
                  <span className="ml-2 font-bold text-yellow-600">
                    {order.status}
                  </span>
                </p>

                <button
                  onClick={() =>
                    changeStatus(order.id)
                  }
                  className="mt-5 rounded-lg bg-black px-5 py-2 text-white hover:bg-yellow-600"
                >
                  Update Status
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
