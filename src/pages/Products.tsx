import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { categories, products } from "@/lib/products";
import { getProductImage } from "@/lib/productImages";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import exportPort from "@/assets/export-port.jpg";
import exportShip from "@/assets/export-ship.jpg";
import exportWarehouse from "@/assets/export-warehouse.jpg";
import exportPackaging from "@/assets/export-packaging.jpg";
import exportCustoms from "@/assets/export-customs.jpg";



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
      <section className="relative isolate overflow-hidden">
        <HeroSlider images={[exportPort, exportShip, exportWarehouse, exportPackaging, exportCustoms]} />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative w-full max-w-[900px] rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,249,255,0.84))] p-8 shadow-[0_18px_45px_rgba(10,25,49,0.18)] backdrop-blur-[18px] [background-image:linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0)_35%)] animate-[fadeUp_0.8s_ease-out] sm:p-10">
            <div className="absolute left-0 top-6 h-16 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37_0%,#F5D76E_100%)]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(90deg,#D4AF37_0%,#E6C85C_100%)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/90" />
              Product Catalogue
            </span>
            <h1 className="mt-5 text-[2.2rem] font-bold leading-[1.1] tracking-[0.01em] text-[#0A2540] [font-family:'Cormorant_Garamond',serif] sm:text-[2.8rem] lg:text-[3.4rem]">
              {products.length}+ Export Products <span className="text-[#17884B]">Across Multiple Categories</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
            <p className="mt-5 max-w-[720px] text-[0.98rem] font-medium leading-[1.85] text-[#324A5F] sm:text-[1.05rem]">
              Discover premium export-quality products across agriculture, eco-friendly solutions,
              health &amp; wellness, imitation jewellery, industrial supplies, and more — quality
              tested and ready for global markets.
            </p>
            <div className="relative mt-7 max-w-xl rounded-2xl border border-[#0A2540]/10 bg-white p-1.5 shadow-[0_10px_28px_rgba(10,25,49,0.10)]">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products — e.g. honey, areca, millet..."
                className="w-full rounded-xl bg-white py-3.5 pl-12 pr-4 text-sm text-foreground outline-none ring-accent focus:ring-2"
              />
            </div>
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
          <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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