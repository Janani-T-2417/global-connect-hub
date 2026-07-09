import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, products } from "@/lib/products";
import { ArrowRight, Search } from "lucide-react";
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
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Product Catalogue
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {products.length}+ products across {categories.length} categories
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Every product is HS-code mapped, quality-controlled, and ready to ship in container
            loads to global destinations.
          </p>
          <div className="relative mt-8 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products — e.g. honey, areca, millet..."
              className="w-full rounded-lg bg-white py-3.5 pl-12 pr-4 text-sm text-foreground outline-none ring-accent focus:ring-2"
            />
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
            const img = categories.find((c) => c.slug === p.categorySlug)?.image;
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