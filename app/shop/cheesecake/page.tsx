import React from "react";
import { getPies } from "../../lib/getPies";
import { Pie } from "../../lib/types";
import AddToCartButton from "../../components/AddToCartButton";
import Image from "next/image";
import MenuItem from "../../components/MenuItem";

export default async function CheesecakePage() {
  const pies = await getPies("cheesecake");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Cheesecakes</h1>
      <MenuItem pies={pies} />
    </div>
  );
}
