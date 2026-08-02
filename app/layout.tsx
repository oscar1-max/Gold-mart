import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "GoldMart | Premium Marketplace",
  description:
    "GoldMart is a modern marketplace connecting buyers and sellers with secure shopping experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            <CartProvider>
              <Navbar />

              {children}

              <Footer />
            </CartProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
