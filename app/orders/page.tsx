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

const statuses = [
  "Processing",
  "Shipped",
  "Delivered",
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const updateStatus = (id: number) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        const currentIndex = statuses.indexOf(
          order.status
        );

        return {
          ...order,
          status:
            statuses[
              Math.min(currentIndex + 1, 2)
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
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8">
            No orders yet.
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

                <p className="mt-2">
                  Status:
                  <span className="ml-2 font-bold text-yellow-600">
                    {order.status}
                  </span>
                </p>

                <div className="mt-4">
                  {order.items.map((item) => (
                    <p key={item.id}>
                      {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>

                <p className="mt-4 text-xl font-bold">
                  Total: ${order.total.toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    updateStatus(order.id)
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
