import React from "react";
import { getPies } from "../lib/getPies";
import MenuItem from "../components/MenuItem";

export default async function ShopPage() {
  const pies = await getPies();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">All Pies</h1>
      <MenuItem pies={pies} />
    </div>
  );
}
