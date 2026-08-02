"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem("sellerProducts");
    const savedOrders = localStorage.getItem("orders");
    const savedSeller = localStorage.getItem("seller");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

    if (savedSeller) {
      setSeller(JSON.parse(savedSeller));
    }
  }, []);

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-yellow-600">
          GoldMart Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your marketplace from one place.
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              Products
            </h2>

            <p className="mt-3 text-3xl font-bold">
              {products.length}
            </p>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              Orders
            </h2>

            <p className="mt-3 text-3xl font-bold">
              {orders.length}
            </p>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              Sellers
            </h2>

            <p className="mt-3 text-3xl font-bold">
              {seller ? 1 : 0}
            </p>
          </div>

        </div>


        <div className="mt-10 rounded-2xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Recent Orders
          </h2>

          {orders.length === 0 ? (
            <p className="mt-4 text-gray-500">
              No orders available.
            </p>
          ) : (
            orders.map((order: any) => (
              <div
                key={order.id}
                className="mt-4 rounded-lg border p-4"
              >
                <p>
                  Order ID: {order.id}
                </p>

                <p>
                  Status: {order.status}
                </p>

                <p>
                  Total: ${order.total}
                </p>
              </div>
            ))
          )}

        </div>

      </div>
    </main>
  );
}
