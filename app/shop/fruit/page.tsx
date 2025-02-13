"use client";

import React, { useState, useEffect } from "react";
import { getPies } from "../../lib/getPies";
import { Pie } from "../../lib/types";
import Navigation from "../../components/Navigation";
import AddToCartButton from "../../components/AddToCartButton";
import Image from "next/image";
import MenuItem from "../../components/MenuItem";

export default function FruitPage() {
  const [pies, setPies] = useState<Pie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPies() {
      try {
        setIsLoading(true);
        const data = await getPies("fruit");
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
        <h1 className="text-3xl font-serif font-bold mb-8">Fruit Pies</h1>
        <MenuItem pies={pies} />
      </div>
    </>
  );
}
