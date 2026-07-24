import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { getProductImage } from "@/lib/productImages";
import { whatsappUrl } from "@/lib/contact";
import { ArrowLeft, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

type CategoryTheme = {
  gradient: string; overlay: string;
  panelBg: string; panelBorder: string; panelShadow: string;
  badgeBg: string; badgeBorder: string; badgeText: string;
  chipBg: string; chipText: string;
  emoji: string;
};

const themes: Record<string, CategoryTheme> = {
  "biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging": {
    gradient: "linear-gradient(125deg, #0A1D3A 0%, #0F3B2E 55%, #15803D 100%)",
    overlay: "linear-gradient(120deg, rgba(10,29,58,0.72) 0%, rgba(21,128,61,0.55) 100%)",
    panelBg: "linear-gradient(160deg, rgba(10,29,58,0.88) 0%, rgba(21,128,61,0.85) 100%)",
    panelBorder: "rgba(134,239,172,0.45)", panelShadow: "0 30px 80px -20px rgba(21,128,61,0.55)",
    badgeBg: "linear-gradient(90deg,#15803D,#22c55e)", badgeBorder: "rgba(187,247,208,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(187,247,208,0.18)", chipText: "#ecfdf5",
    emoji: "🌿",
  },
  "natural-honey": {
    gradient: "linear-gradient(125deg, #3a1d05 0%, #78350f 45%, #d4af37 100%)",
    overlay: "linear-gradient(120deg, rgba(58,29,5,0.72) 0%, rgba(212,175,55,0.45) 100%)",
    panelBg: "linear-gradient(160deg, rgba(58,29,5,0.9) 0%, rgba(146,64,14,0.88) 100%)",
    panelBorder: "rgba(251,191,36,0.55)", panelShadow: "0 30px 80px -20px rgba(212,175,55,0.55)",
    badgeBg: "linear-gradient(90deg,#d97706,#fbbf24)", badgeBorder: "rgba(253,224,71,0.45)", badgeText: "#3a1d05",
    chipBg: "rgba(253,224,71,0.2)", chipText: "#fef3c7",
    emoji: "🍯",
  },
  "agricultural-dehydrated-powders": {
    gradient: "linear-gradient(125deg, #4c1d95 0%, #7c2d92 50%, #ea580c 100%)",
    overlay: "linear-gradient(120deg, rgba(76,29,149,0.7) 0%, rgba(234,88,12,0.45) 100%)",
    panelBg: "linear-gradient(160deg, rgba(76,29,149,0.9) 0%, rgba(124,45,146,0.88) 100%)",
    panelBorder: "rgba(251,146,60,0.55)", panelShadow: "0 30px 80px -20px rgba(124,45,146,0.6)",
    badgeBg: "linear-gradient(90deg,#7c3aed,#f97316)", badgeBorder: "rgba(253,186,116,0.45)", badgeText: "#ffffff",
    chipBg: "rgba(253,186,116,0.18)", chipText: "#fff7ed",
    emoji: "✨",
  },
  "food-industrial-powders": {
    gradient: "linear-gradient(125deg, #4c1d95 0%, #7c2d92 50%, #ea580c 100%)",
    overlay: "linear-gradient(120deg, rgba(76,29,149,0.7) 0%, rgba(234,88,12,0.45) 100%)",
    panelBg: "linear-gradient(160deg, rgba(76,29,149,0.9) 0%, rgba(124,45,146,0.88) 100%)",
    panelBorder: "rgba(251,146,60,0.55)", panelShadow: "0 30px 80px -20px rgba(124,45,146,0.6)",
    badgeBg: "linear-gradient(90deg,#7c3aed,#f97316)", badgeBorder: "rgba(253,186,116,0.45)", badgeText: "#ffffff",
    chipBg: "rgba(253,186,116,0.18)", chipText: "#fff7ed",
    emoji: "✨",
  },
  "millets-powders": {
    gradient: "linear-gradient(125deg, #3f2712 0%, #78450f 50%, #d4a537 100%)",
    overlay: "linear-gradient(120deg, rgba(63,39,18,0.72) 0%, rgba(212,165,55,0.4) 100%)",
    panelBg: "linear-gradient(160deg, rgba(63,39,18,0.9) 0%, rgba(120,69,15,0.88) 100%)",
    panelBorder: "rgba(251,191,36,0.5)", panelShadow: "0 30px 80px -20px rgba(120,69,15,0.6)",
    badgeBg: "linear-gradient(90deg,#92400e,#eab308)", badgeBorder: "rgba(253,224,71,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.15)", chipText: "#fef9c3",
    emoji: "🌾",
  },
  "wooden-pressed-virgin-oils": {
    gradient: "linear-gradient(125deg, #14351a 0%, #3f5f1e 50%, #d4af37 100%)",
    overlay: "linear-gradient(120deg, rgba(20,53,26,0.72) 0%, rgba(212,175,55,0.4) 100%)",
    panelBg: "linear-gradient(160deg, rgba(20,53,26,0.9) 0%, rgba(63,95,30,0.88) 100%)",
    panelBorder: "rgba(251,191,36,0.5)", panelShadow: "0 30px 80px -20px rgba(63,95,30,0.6)",
    badgeBg: "linear-gradient(90deg,#3f5f1e,#d4af37)", badgeBorder: "rgba(253,224,71,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.15)", chipText: "#fefce8",
    emoji: "🫒",
  },
  "fashion-accessories-imitation-jewellery": {
    gradient: "linear-gradient(125deg, #0a0a0a 0%, #2e1065 55%, #6b21a8 100%)",
    overlay: "linear-gradient(120deg, rgba(10,10,10,0.75) 0%, rgba(107,33,168,0.5) 100%)",
    panelBg: "linear-gradient(160deg, rgba(10,10,10,0.92) 0%, rgba(46,16,101,0.9) 100%)",
    panelBorder: "rgba(212,175,55,0.6)", panelShadow: "0 30px 80px -20px rgba(107,33,168,0.55)",
    badgeBg: "linear-gradient(90deg,#6b21a8,#d4af37)", badgeBorder: "rgba(253,224,71,0.5)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.15)", chipText: "#fef9c3",
    emoji: "✨",
  },
  "agro-commodities-fresh-dried": {
    gradient: "linear-gradient(125deg, #7f1d1d 0%, #b91c1c 50%, #f59e0b 100%)",
    overlay: "linear-gradient(120deg, rgba(127,29,29,0.72) 0%, rgba(245,158,11,0.45) 100%)",
    panelBg: "linear-gradient(160deg, rgba(127,29,29,0.9) 0%, rgba(185,28,28,0.88) 100%)",
    panelBorder: "rgba(251,191,36,0.55)", panelShadow: "0 30px 80px -20px rgba(185,28,28,0.55)",
    badgeBg: "linear-gradient(90deg,#b91c1c,#f59e0b)", badgeBorder: "rgba(253,224,71,0.45)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.18)", chipText: "#fff7ed",
    emoji: "🌶️",
  },
  "agricultural-starches-flours-milling-products": {
    gradient: "linear-gradient(125deg, #6b3410 0%, #b45309 55%, #d97706 100%)",
    overlay: "linear-gradient(120deg, rgba(107,52,16,0.7) 0%, rgba(217,119,6,0.45) 100%)",
    panelBg: "linear-gradient(160deg, rgba(107,52,16,0.9) 0%, rgba(180,83,9,0.88) 100%)",
    panelBorder: "rgba(251,191,36,0.5)", panelShadow: "0 30px 80px -20px rgba(180,83,9,0.55)",
    badgeBg: "linear-gradient(90deg,#92400e,#d97706)", badgeBorder: "rgba(253,224,71,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.15)", chipText: "#fef3c7",
    emoji: "🌾",
  },
  "animal-feed-oil-cakes": {
    gradient: "linear-gradient(125deg, #052e16 0%, #14532d 55%, #713f12 100%)",
    overlay: "linear-gradient(120deg, rgba(5,46,22,0.72) 0%, rgba(113,63,18,0.5) 100%)",
    panelBg: "linear-gradient(160deg, rgba(5,46,22,0.9) 0%, rgba(20,83,45,0.88) 100%)",
    panelBorder: "rgba(134,239,172,0.4)", panelShadow: "0 30px 80px -20px rgba(20,83,45,0.6)",
    badgeBg: "linear-gradient(90deg,#14532d,#a16207)", badgeBorder: "rgba(187,247,208,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(187,247,208,0.15)", chipText: "#dcfce7",
    emoji: "🐄",
  },
  "premium-superfood-botanical-powders": {
    gradient: "linear-gradient(125deg, #14532d 0%, #4d7c0f 55%, #d4af37 100%)",
    overlay: "linear-gradient(120deg, rgba(20,83,45,0.72) 0%, rgba(212,175,55,0.4) 100%)",
    panelBg: "linear-gradient(160deg, rgba(20,83,45,0.9) 0%, rgba(77,124,15,0.88) 100%)",
    panelBorder: "rgba(212,175,55,0.5)", panelShadow: "0 30px 80px -20px rgba(77,124,15,0.6)",
    badgeBg: "linear-gradient(90deg,#4d7c0f,#d4af37)", badgeBorder: "rgba(253,224,71,0.4)", badgeText: "#ffffff",
    chipBg: "rgba(253,224,71,0.15)", chipText: "#f7fee7",
    emoji: "🌿",
  },
};

const defaultTheme: CategoryTheme = themes["biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging"];

const categoryBadges: Record<string, { icon: string; label: string }[]> = {
  "biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging": [
    { icon: "♻️", label: "Compostable" },
    { icon: "🌱", label: "Sustainable" },
    { icon: "🌍", label: "Export Ready" },
  ],
  "fashion-accessories-imitation-jewellery": [
    { icon: "💎", label: "Premium Finish" },
    { icon: "✨", label: "Handcrafted" },
    { icon: "🌍", label: "Export Quality" },
  ],
  "agricultural-dehydrated-powders": [
    { icon: "🌿", label: "100% Natural" },
    { icon: "🏭", label: "Hygienically Processed" },
    { icon: "🌍", label: "Export Ready" },
  ],
  "wooden-pressed-virgin-oils": [
    { icon: "🫒", label: "Cold Pressed" },
    { icon: "🌾", label: "Chemical Free" },
    { icon: "🚢", label: "Global Shipping" },
  ],
  "millets-powders": [
    { icon: "🌾", label: "Farm Fresh" },
    { icon: "⭐", label: "Premium Grade" },
    { icon: "🌍", label: "Exported Worldwide" },
  ],
  "food-industrial-powders": [
    { icon: "🏭", label: "Industrial Grade" },
    { icon: "✅", label: "Quality Certified" },
    { icon: "🌍", label: "Export Ready" },
  ],
  "agro-commodities-fresh-dried": [
    { icon: "🌱", label: "Farm Sourced" },
    { icon: "⭐", label: "Premium Quality" },
    { icon: "🚢", label: "Global Shipping" },
  ],
  "agricultural-starches-flours-milling-products": [
    { icon: "🌾", label: "Freshly Milled" },
    { icon: "✅", label: "Purity Assured" },
    { icon: "🌍", label: "Export Ready" },
  ],
  "animal-feed-oil-cakes": [
    { icon: "🐄", label: "Nutrient Rich" },
    { icon: "🌿", label: "100% Natural" },
    { icon: "🚢", label: "Bulk Export" },
  ],
  "premium-superfood-botanical-powders": [
    { icon: "🌿", label: "Botanical Pure" },
    { icon: "⭐", label: "Superfood Grade" },
    { icon: "🌍", label: "Exported Worldwide" },
  ],
  "natural-honey": [
    { icon: "🍯", label: "100% Pure" },
    { icon: "🐝", label: "Raw & Natural" },
    { icon: "🌍", label: "Export Quality" },
  ],
};

const defaultBadges = [
  { icon: "🌍", label: "Exported Worldwide" },
  { icon: "⭐", label: "Premium Quality" },
  { icon: "🚢", label: "Ready for Global Shipping" },
];

export default function CategoryPage() {
  
  const { category: catSlug } = useParams();
  const category = getCategory(catSlug as string);
  if (!category) return <div className="p-20 text-center">Category not found</div>;

  const items = getProductsByCategory(category.slug);
  const badges = categoryBadges[category.slug] ?? defaultBadges;
  const theme = themes[category.slug] ?? defaultTheme;

  // Build a unique slideshow per category from that category's own product images.
  const slides = useMemo(() => {
    const imgs = items
      .map((p) => getProductImage(p.slug))
      .filter((x): x is string => Boolean(x));
    const unique = Array.from(new Set([category.image, ...imgs]));
    // Pick up to 6 evenly spaced across the set for variety.
    if (unique.length <= 6) return unique;
    const step = unique.length / 6;
    return Array.from({ length: 6 }, (_, i) => unique[Math.floor(i * step)]);
  }, [items, category.image]);

  const [active, setActive] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (delta: number) =>
    setActive((i) => (i + delta + slides.length) % slides.length);

  return (
    <SiteLayout>
      <section
        className="relative isolate overflow-hidden h-[340px] sm:h-[420px] lg:h-[500px]"
        style={{ background: theme.gradient }}
      >
        {/* Slideshow */}
        <div className="absolute inset-0 -z-20">
          {slides.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ease-in-out ${
                i === active ? "opacity-100 animate-ken" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {/* Category-tinted cinematic overlay */}
        <div className="absolute inset-0 -z-10" style={{ background: theme.overlay }} />
        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 lg:px-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/85">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/products" className="hover:text-white">Products</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">{category.shortName}</span>
            </nav>
            <Link
              to="/products"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#0B1F3A] px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15803D] hover:shadow-elegant"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to Products
            </Link>
          </div>

          <div className="mb-2 w-full max-w-md lg:max-w-[42%]">
            <div
              className="rounded-3xl p-5 sm:p-6 backdrop-blur-xl"
              style={{
                background: theme.panelBg,
                border: `1px solid ${theme.panelBorder}`,
                boxShadow: theme.panelShadow,
              }}
            >
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg"
                style={{ background: theme.badgeBg, color: theme.badgeText, border: `1px solid ${theme.badgeBorder}` }}
              >
                <span aria-hidden>{theme.emoji}</span> {items.length} Products
              </span>
              <h1
                className="mt-3 hero-heading font-semibold tracking-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
              >
                {category.shortName}
              </h1>
              <p className="mt-2 text-[15px] sm:text-[17px] font-normal leading-snug text-white/85">
                Premium export-grade quality, sourced and packed for global buyers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold backdrop-blur"
                    style={{
                      background: theme.chipBg,
                      color: theme.chipText,
                      border: `1px solid ${theme.panelBorder}`,
                    }}
                  >
                    <span aria-hidden>{b.icon}</span> {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/25 sm:left-5 sm:p-2.5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/25 sm:right-5 sm:p-2.5"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <div key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-elegant">
              <Link to={`/products/${p.categorySlug}/${p.slug}`} className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={getProductImage(p.slug) ?? category.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow">
                  HSN {p.hs6}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <Link to={`/products/${p.categorySlug}/${p.slug}`}>
                  <h3 className="line-clamp-2 text-sm font-bold leading-snug text-foreground transition group-hover:text-primary">
                    {p.name}
                  </h3>
                </Link>
                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 flex items-center gap-2">
                  <Link to="/contact" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0B1F3A] px-3 py-2 text-[11px] font-bold text-white transition hover:bg-[#15803D]">
                    <Mail className="h-3.5 w-3.5" /> Inquiry
                  </Link>
                  <a href={whatsappUrl}
                     target="_blank" rel="noreferrer"
                     className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#15803D] px-3 py-2 text-[11px] font-bold text-white transition hover:bg-[#0B1F3A]">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Explore other categories
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}