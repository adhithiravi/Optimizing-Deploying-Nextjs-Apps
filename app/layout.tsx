import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bethany's Cafe",
  description: "Handcrafted pies made with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
