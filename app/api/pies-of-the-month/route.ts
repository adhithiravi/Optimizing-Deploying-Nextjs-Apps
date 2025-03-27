import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mock data - replace with your actual database call
const monthlyPies = [
  {
    id: "f2",
    name: "Cherry Pie",
    price: 13.95,
    description: "Sweet and tart cherries in a buttery crust",
    category: "fruit",
    image: "/images/Fruit/fruit2.png",
  },
  {
    id: "f3",
    name: "Blueberry Pie",
    price: 13.95,
    description: "Bursting with fresh blueberries",
    category: "fruit",
    image: "/images/Fruit/fruit3.png",
  },
  {
    id: "c3",
    name: "Strawberry Cheesecake",
    price: 17.95,
    description: "Topped with fresh strawberry compote",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake3.jpg",
  },
];

export async function GET(request: NextRequest) {
  try {
    // Add a small delay to simulate network latency (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(monthlyPies);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch pies" },
      { status: 500 }
    );
  }
}
