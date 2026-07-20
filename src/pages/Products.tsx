import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, products } from "@/lib/products";
import { getProductImage } from "@/lib/productImages";
import { ArrowRight, Search, Ship, Package, Leaf, Globe2 } from "lucide-react";
import { useMemo, useState } from "react";



export default function ProductsIndex() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return products;
    const s = q.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s) ||
        p.tagline.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden py-24 text-primary-foreground">
        {/* Animated navy → emerald gradient */}
        <div
          className="absolute inset-0 -z-30 animate-drift"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #06132a 0%, #0B1F3A 35%, #103a52 65%, #15803D 100%)",
          }}
        />
        {/* World dot-map pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* Shipping routes */}
        <svg
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="route" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#15803D" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M -20 320 Q 300 120 620 240 T 1220 140" fill="none" stroke="url(#route)" strokeWidth="1.5" className="animate-dash" />
          <path d="M -20 100 Q 400 260 720 160 T 1220 280" fill="none" stroke="url(#route)" strokeWidth="1.5" className="animate-dash" style={{ animationDelay: "-4s" }} />
          <path d="M -20 220 Q 500 40 900 220 T 1220 60" fill="none" stroke="url(#route)" strokeWidth="1" className="animate-dash" style={{ animationDelay: "-8s" }} />
        </svg>
        {/* Glowing orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#15803D]/40 blur-3xl animate-pulse-glow -z-10" />
        <div className="pointer-events-none absolute -bottom-32 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[#D4AF37]/25 blur-3xl animate-pulse-glow -z-10" style={{ animationDelay: "-3s" }} />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 rounded-full bg-[#3b82f6]/25 blur-3xl animate-pulse-glow -z-10" style={{ animationDelay: "-6s" }} />
        {/* Floating export icons */}
        <Ship className="pointer-events-none absolute left-[8%] top-[22%] h-8 w-8 text-white/25 animate-float" />
        <Package className="pointer-events-none absolute right-[10%] top-[18%] h-7 w-7 text-white/25 animate-float" style={{ animationDelay: "-1.5s" }} />
        <Leaf className="pointer-events-none absolute right-[22%] bottom-[18%] h-7 w-7 text-white/30 animate-float" style={{ animationDelay: "-2.5s" }} />
        <Globe2 className="pointer-events-none absolute left-[18%] bottom-[22%] h-8 w-8 text-white/25 animate-float" style={{ animationDelay: "-0.8s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Product Catalogue
          </span>
          <h1 className="hero-heading mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {products.length}+ products across {categories.length} categories
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Every product is HS-code mapped, quality-controlled, and ready to ship in container
            loads to global destinations.
          </p>
          <div className="relative mt-8 max-w-xl rounded-2xl border border-white/25 bg-white/10 p-1.5 shadow-elegant backdrop-blur-xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products — e.g. honey, areca, millet..."
              className="w-full rounded-xl bg-white py-3.5 pl-12 pr-4 text-sm text-foreground outline-none ring-accent focus:ring-2"
            />
          </div>
        </div>
      </section>

      {/* Auto-scrolling category showcase */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-sky py-10">
        <div className="marquee-pause overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 pr-8">
            {[...categories, ...categories].map((c, i) => (
              <Link
                key={c.slug + i}
                to={`/products/${c.slug}`}
                className="group flex w-24 flex-shrink-0 flex-col items-center text-center"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-border shadow-card transition duration-500 group-hover:-translate-y-1 group-hover:ring-accent group-hover:shadow-glow">
                  <img
                    src={c.image}
                    alt={c.shortName}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 line-clamp-2 text-[11px] font-semibold leading-tight text-foreground group-hover:text-primary">
                  {c.shortName}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {!q && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Browse by Category</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className="group relative flex overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-1/3 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.shortName}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {c.count} Products
                  </div>
                  <h3 className="mt-1 font-semibold leading-snug text-foreground group-hover:text-primary">
                    {c.shortName}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View products <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {q ? `Results (${filtered.length})` : "All Products"}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => {
            const catImg = categories.find((c) => c.slug === p.categorySlug)?.image;
            const img = getProductImage(p.slug) ?? catImg;
            return (
              <Link
                key={p.slug}
                to={`/products/${p.categorySlug}/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    HS {p.hs6}
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                    {p.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{p.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No products matched "{q}".
          </div>
        )}
      </section>
    </SiteLayout>
  );
}