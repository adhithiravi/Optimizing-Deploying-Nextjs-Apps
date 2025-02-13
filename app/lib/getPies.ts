export async function getPies(category?: string) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/pies`);
    if (category) {
      url.searchParams.set("category", category);
    }
    const res = await fetch(url, {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pies:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}
