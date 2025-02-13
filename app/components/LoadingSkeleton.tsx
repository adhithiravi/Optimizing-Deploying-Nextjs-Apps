import React from "react";
import Image from "next/image";
import placeholderLogo from "../../public/images/logo-white.png";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-64 w-full">
            <Image
              src={placeholderLogo}
              alt="Loading image"
              width={400}
              height={400}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
