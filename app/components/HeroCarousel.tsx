"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const heroSlides = [
  {
    image: "/images/Hero/hero1.jpg",
    title: "Welcome to Bethany's Cafe",
    description:
      "Handcrafted pies made with love, just like grandma used to make",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    image: "/images/Hero/hero2.jpg",
    title: "Pumpkin Pie",
    description: "Perfect for any holiday gathering",
    buttonText: "View Seasonal",
    buttonLink: "/shop/seasonal",
  },
  {
    image: "/images/Hero/hero3.jpg",
    title: "Chocolate Pecan Pie",
    description: "A delicious twist on a classic favorite",
    buttonText: "Browse Menu",
    buttonLink: "/shop",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="hero-overlay" />
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="hero-content">
              <h1 className="text-5xl font-serif font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
              <Link href={slide.buttonLink} className="btn-primary">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
