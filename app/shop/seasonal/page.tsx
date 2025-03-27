import React from "react";
import { getPies } from "../../lib/getPies";
import MenuItem from "../../components/MenuItem";

export default async function SeasonalPage() {
  const pies = await getPies("seasonal");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Seasonal Pies</h1>
      <MenuItem pies={pies} />
    </div>
  );
}
