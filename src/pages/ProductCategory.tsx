import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { getProductImage } from "@/lib/productImages";
import { ArrowLeft, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

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
      <section className="relative isolate overflow-hidden h-[320px] sm:h-[400px] lg:h-[480px]">
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
        {/* Subtle navy overlay — keep images vibrant */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(115deg, oklch(0.16 0.05 260 / 0.55) 0%, oklch(0.22 0.06 260 / 0.35) 55%, oklch(0.22 0.06 260 / 0.25) 100%)",
          }}
        />
        {/* Subtle floating particles */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-white/60 animate-float" />
          <div className="absolute left-[70%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: "1.2s" }} />
          <div className="absolute left-[40%] top-[70%] h-1 w-1 rounded-full bg-white/50 animate-float" style={{ animationDelay: "2.4s" }} />
          <div className="absolute left-[85%] top-[65%] h-2 w-2 rounded-full bg-white/30 animate-float" style={{ animationDelay: "0.6s" }} />
        </div>

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
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-elegant backdrop-blur-[20px] sm:p-6">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {items.length} Products
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
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur"
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
                  <a href={`https://wa.me/910000000000?text=${encodeURIComponent("Hi JAKKI EXIM, I'm interested in " + p.name)}`}
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