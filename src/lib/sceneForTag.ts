export function sceneForTag(tag: string) {
  const map: Record<string, "mountains" | "lake" | "chinar" | "saffron" | "weave" | "market"> = {
    "Craft & Heritage": "weave",
    Nature: "chinar",
    Education: "lake",
    Agriculture: "saffron",
    Trade: "market",
  };
  return map[tag] ?? "mountains";
}
