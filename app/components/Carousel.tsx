"use client";

import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/images/Seasonal/pie-1.png",
    alt: "Classic Apple Pie",
    title: "Classic Apple Pie",
    description: "Made with fresh apples and a flaky crust",
  },
  {
    src: "/images/Seasonal/pie-2.png",
    alt: "Pumpkin Pie",
    title: "Pumpkin Pie",
    description: "Perfect for any holiday gathering",
  },
  {
    src: "/images/Seasonal/pie-3.png",
    alt: "Chocolate Pecan Pie",
    title: "Chocolate Pecan Pie",
    description: "A delicious twist on a classic favorite",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
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
