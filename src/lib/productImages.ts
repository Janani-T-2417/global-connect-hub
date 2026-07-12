// Auto-loads every jpg under src/assets/products/ keyed by product slug.
const modules = import.meta.glob("/src/assets/products/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const path in modules) {
  const slug = path.split("/").pop()!.replace(/\.jpg$/, "");
  map[slug] = modules[path];
}

export const productImages = map;
export const getProductImage = (slug: string): string | undefined => map[slug];