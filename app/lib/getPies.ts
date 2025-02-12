export async function getPies(category?: string) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/pies`);
    if (category) {
      url.searchParams.set("category", category);
    }

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      // Only try to read the response body once
      const errorData = await res.json().catch(() => null);
      const errorMessage = errorData?.message || "Failed to fetch pies";
      throw new Error(errorMessage);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pies:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}
