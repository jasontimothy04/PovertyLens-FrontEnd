const BASE = "https://povertylens-backend-production.up.railway.app";

export async function fetchMapData() {
  const res = await fetch(`${BASE}/map`);
  if (!res.ok) throw new Error("Failed to fetch map data");
  return res.json();
}

export async function fetchRegion(name) {
  const res = await fetch(`${BASE}/region?name=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("Failed to fetch region");
  return res.json();
}

export async function searchRegion(q) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(q)}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}