export async function getPiesOfTheMonth() {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/pies-of-the-month`);

    // Enable ISR
    const res = await fetch(url, {
      next: { revalidate: 120 },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pies:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}
