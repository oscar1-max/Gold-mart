"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-bold">
            You are not logged in
          </h1>

          <p className="mt-3 text-gray-500">
            Please login to view your profile.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-yellow-600"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-yellow-600">
          My Profile
        </h1>

        <div className="mt-8 space-y-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-gray-500">
              Name
            </p>
            <p className="font-semibold">
              {user.name}
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-gray-500">
              Email
            </p>
            <p className="font-semibold">
              {user.email}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-8 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-yellow-600"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
