"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password);

    router.push("/");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-yellow-600">
          GoldMart
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-yellow-600"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-yellow-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
