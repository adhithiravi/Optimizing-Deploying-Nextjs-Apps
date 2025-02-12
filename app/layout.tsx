import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";

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
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
