"use client";

import React, { useState, useEffect } from "react";
import { getPies } from "../lib/getPies";
import { Pie } from "../lib/types";
import Navigation from "../components/Navigation";
import AddToCartButton from "../components/AddToCartButton";

export default function ShopPage() {
  const [pies, setPies] = useState<Pie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPies() {
      try {
        setIsLoading(true);
        const data = await getPies();
        setPies(data);
      } catch (err) {
        setError("Failed to load pies. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPies();
  }, []);

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">Loading pies...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8">All Pies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pies.map((pie: Pie) => (
            <div
              key={pie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={pie.image}
                alt={pie.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pie.name}</h3>
                <p className="text-gray-600 mb-2">{pie.description}</p>
                <p className="text-gray-800 font-bold">
                  ${pie.price.toFixed(2)}
                </p>
                <AddToCartButton pie={pie} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
