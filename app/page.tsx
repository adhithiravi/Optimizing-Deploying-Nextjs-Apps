import React from "react";
import HeroCarousel from "./components/HeroCarousel";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Featured Pies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/Seasonal/pie-1.png"
                  alt="Classic Apple Pie"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Classic Apple Pie
                  </h3>
                  <p className="text-gray-600">$12.95</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/Seasonal/pie-2.png"
                  alt="Pumpkin Pie"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Pumpkin Pie</h3>
                  <p className="text-gray-600">$14.95</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/Seasonal/pie-3.png"
                  alt="Chocolate Pecan Pie"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Chocolate Pecan Pie
                  </h3>
                  <p className="text-gray-600">$15.95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
