import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="hero-overlay" />
      <img
        src="/images/Hero/hero1.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-content">
        <h1 className="text-5xl font-serif font-bold mb-6">
          Welcome to Bethany's Cafe
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Handcrafted pies made with love, just like grandma used to make. Using
          only the finest ingredients and traditional recipes passed down
          through generations.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
