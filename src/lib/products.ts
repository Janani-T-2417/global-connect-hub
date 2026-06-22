import productsData from "@/data/products.json";
import catEco from "@/assets/cat-eco.jpg";
import catDehydrated from "@/assets/cat-dehydrated.jpg";
import catJewellery from "@/assets/cat-jewellery.jpg";
import catOils from "@/assets/cat-oils.jpg";
import catMillets from "@/assets/cat-millets.jpg";
import catFoodPowders from "@/assets/cat-food-powders.jpg";
import catAgro from "@/assets/cat-agro.jpg";
import catFlours from "@/assets/cat-flours.jpg";
import catFeed from "@/assets/cat-feed.jpg";
import catSuperfood from "@/assets/cat-superfood.jpg";
import catHoney from "@/assets/cat-honey.jpg";

export type Product = {
  category: string;
  categorySlug: string;
  name: string;
  slug: string;
  hs6: string;
  hs8: string;
  note: string;
  tagline: string;
  description: string;
  seo: string;
};

export const products = productsData as Product[];

export const categoryImages: Record<string, string> = {
  "biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging": catEco,
  "agricultural-dehydrated-powders": catDehydrated,
  "fashion-accessories-imitation-jewellery": catJewellery,
  "wooden-pressed-virgin-oils": catOils,
  "millets-powders": catMillets,
  "food-industrial-powders": catFoodPowders,
  "agro-commodities-fresh-dried": catAgro,
  "agricultural-starches-flours-milling-products": catFlours,
  "animal-feed-oil-cakes": catFeed,
  "premium-superfood-botanical-powders": catSuperfood,
  "natural-honey": catHoney,
};

export const categoryShortNames: Record<string, string> = {
  "biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging":
    "Eco-Friendly Tableware & Packaging",
  "agricultural-dehydrated-powders": "Dehydrated Powders",
  "fashion-accessories-imitation-jewellery": "Fashion & Imitation Jewellery",
  "wooden-pressed-virgin-oils": "Wooden-Pressed Virgin Oils",
  "millets-powders": "Millet Powders",
  "food-industrial-powders": "Food & Industrial Powders",
  "agro-commodities-fresh-dried": "Agro Commodities — Fresh & Dried",
  "agricultural-starches-flours-milling-products": "Starches, Flours & Milling",
  "animal-feed-oil-cakes": "Animal Feed & Oil Cakes",
  "premium-superfood-botanical-powders": "Superfood & Botanicals",
  "natural-honey": "Natural Honey",
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  count: number;
};

export const categories: Category[] = Array.from(
  products.reduce((map, p) => {
    if (!map.has(p.categorySlug)) {
      map.set(p.categorySlug, { slug: p.categorySlug, name: p.category, count: 0 });
    }
    map.get(p.categorySlug)!.count += 1;
    return map;
  }, new Map<string, { slug: string; name: string; count: number }>()).values(),
).map((c) => ({
  ...c,
  shortName: categoryShortNames[c.slug] ?? c.name,
  image: categoryImages[c.slug] ?? catEco,
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);