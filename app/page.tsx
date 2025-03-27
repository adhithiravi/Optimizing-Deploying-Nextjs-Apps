import React from "react";
import HeroCarousel from "./components/HeroCarousel";
import PiesOfTheMonth from "./components/PiesOfTheMonth";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <section className="py-12 bg-white">
        <Suspense fallback={<p>Loading pies of the month</p>}>
          <PiesOfTheMonth />
        </Suspense>
      </section>
    </div>
  );
}
