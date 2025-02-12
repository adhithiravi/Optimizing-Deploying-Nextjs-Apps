"use client";

import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navigation() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-[rgba(200,125,82,1)] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Bethany's Pie Shop"
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <div className="relative group">
              <button className="nav-link">Shop</button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/shop" className="dropdown-item">
                    All Pies
                  </Link>
                  <Link href="/shop/fruit" className="dropdown-item">
                    Fruit Pies
                  </Link>
                  <Link href="/shop/seasonal" className="dropdown-item">
                    Seasonal Pies
                  </Link>
                  <Link href="/shop/cheesecake" className="dropdown-item">
                    Cheesecakes
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/register" className="nav-link">
              Register
            </Link>
            <Link href="/cart" className="nav-link flex items-center">
              <FaShoppingCart className="mr-2" />
              Cart
              {itemCount > 0 && (
                <span className="ml-2 bg-white text-[rgba(200,125,82,1)] rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
