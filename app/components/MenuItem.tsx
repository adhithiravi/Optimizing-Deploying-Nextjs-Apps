import { Pie } from "../lib/types";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function MenuItem({ pies }: { pies: Pie[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pies.map((pie: Pie) => (
        <div
          key={pie.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-64 w-full">
            <Image
              src={pie.image}
              alt={pie.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
              quality={85}
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{pie.name}</h3>
            <p className="text-gray-600 mb-2">{pie.description}</p>
            <p className="text-gray-800 font-bold">${pie.price.toFixed(2)}</p>
            <AddToCartButton pie={pie} />
          </div>
        </div>
      ))}
    </div>
  );
}
