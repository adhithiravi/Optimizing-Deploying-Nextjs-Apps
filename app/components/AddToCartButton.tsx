"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { Pie } from "../lib/types";
import { FaShoppingCart } from "react-icons/fa";

interface AddToCartButtonProps {
  pie: Pie;
}

export default function AddToCartButton({ pie }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(pie);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <button
      className={`btn-primary w-full flex items-center justify-center ${
        isAdding ? "opacity-75" : ""
      }`}
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      <FaShoppingCart className="mr-2" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
