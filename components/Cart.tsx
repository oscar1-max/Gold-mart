"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Shopping Cart
          </h2>

          <button
            onClick={closeCart}
            className="rounded-lg border px-3 py-2 hover:bg-gray-100"
          >
            ✖
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border p-4"
                >
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-600">
                    {item.price} × {item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-bold">
                Total: ${total.toFixed(2)}
              </h3>

              <button className="mt-4 w-full rounded-lg bg-yellow-500 py-3 font-semibold text-black hover:bg-yellow-400">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
