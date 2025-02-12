import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mock data - replace with your actual database call
const pies = [
  // Seasonal Pies
  {
    id: "s1",
    name: "Pumpkin Pie",
    price: 14.95,
    description: "Perfect for any holiday gathering",
    category: "seasonal",
    image: "/images/Seasonal/pie-1.png",
  },
  {
    id: "s2",
    name: "Pecan Pie",
    price: 15.95,
    description: "Traditional southern style pecan pie",
    category: "seasonal",
    image: "/images/Seasonal/pie-2.png",
  },
  {
    id: "s3",
    name: "Sweet Potato Pie",
    price: 13.95,
    description: "Classic holiday favorite with warm spices",
    category: "seasonal",
    image: "/images/Seasonal/pie-3.png",
  },

  // Fruit Pies
  {
    id: "f1",
    name: "Classic Apple Pie",
    price: 12.95,
    description: "Made with fresh apples and a flaky crust",
    category: "fruit",
    image: "/images/Fruit/fruit1.png",
  },
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
  // Cheesecakes
  {
    id: "c1",
    name: "Classic New York Cheesecake",
    price: 16.95,
    description: "Rich and creamy New York style cheesecake",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake1.jpg",
  },
  {
    id: "c2",
    name: "Chocolate Swirl Cheesecake",
    price: 17.95,
    description: "Marbled with rich chocolate throughout",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake2.jpg",
  },
  {
    id: "c3",
    name: "Strawberry Cheesecake",
    price: 17.95,
    description: "Topped with fresh strawberry compote",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake3.jpg",
  },
  {
    id: "c4",
    name: "Caramel Pecan Cheesecake",
    price: 18.95,
    description: "Drizzled with caramel and topped with pecans",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake4.jpg",
  },
  {
    id: "c5",
    name: "Lemon Cheesecake",
    price: 18.95,
    description: "A refreshing lemon cheesecake with a graham cracker crust",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake5.jpg",
  },
  {
    id: "c6",
    name: "Peach Cheesecake",
    price: 18.95,
    description: "A creamy peach cheesecake with a graham cracker crust",
    category: "cheesecake",
    image: "/images/Cheesecakes/cheesecake6.jpg",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let filteredPies = pies;
    if (category) {
      filteredPies = pies.filter((pie) => pie.category === category);
    }

    // Add a small delay to simulate network latency (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(filteredPies);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch pies" },
      { status: 500 }
    );
  }
}
