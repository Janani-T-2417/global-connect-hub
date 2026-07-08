import productsData from "@/data/products.json";
import { categoryImageUrl, productImage } from "@/lib/productImages";

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

export const categoryImages: Record<string, string> = {};

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
  image: categoryImageUrl(c.slug),
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const getProductImage = (slug: string, w?: number, h?: number) =>
  productImage(slug, w, h);

// Contact defaults used by product cards (WhatsApp button, inquiry link).
export const CONTACT = {
  whatsapp: "+919000000000", // Update in one place — mirrored in product cards
  email: "info@jakkiexim.com",
};