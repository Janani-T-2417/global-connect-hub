import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  categories,
  getCategory,
  getProduct,
  getProductsByCategory,
} from "@/lib/products";
import { ArrowRight, ChevronRight, Mail, Package2 } from "lucide-react";

export const Route = createFileRoute("/products/$category/$product")({
  head: ({ params }) => {
    const p = getProduct(params.product);
    const c = getCategory(params.category);
    if (!p || !c) return { meta: [{ title: "Product | JAKKI EXIM" }] };
    return {
      meta: [
        { title: `${p.name} — Export from India | JAKKI EXIM` },
        { name: "description", content: p.description.slice(0, 155) },
        { name: "keywords", content: p.seo },
        { property: "og:title", content: p.name },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: c.image },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.product);
    const c = getCategory(params.category);
    if (!p || !c) throw notFound();
    return { product: p, category: c };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-primary">
          Back to products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ProductPage() {
  const { product, category } = Route.useLoaderData();
  const related = getProductsByCategory(category.slug).filter((p) => p.slug !== product.slug).slice(0, 4);
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products/$category" params={{ category: category.slug }} className="hover:text-primary">
              {category.shortName}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={category.image}
              alt={product.name}
              width={1280}
              height={896}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div>
            <Link
              to="/products/$category"
              params={{ category: category.slug }}
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
            >
              {category.shortName}
            </Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg italic text-primary">{product.tagline}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              <Spec label="HS Code (6-digit)" value={product.hs6 || "—"} />
              <Spec label="National Code" value={product.hs8 || "—"} />
              <Spec label="Category" value={category.shortName} />
              <Spec label="Export Status" value="Ready" highlight />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" /> Request Quote
              </Link>
              <Link
                to="/products/$category"
                params={{ category: category.slug }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                <Package2 className="h-4 w-4" /> View Category
              </Link>
            </div>
          </div>
        </div>

        {product.note && (
          <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Classification Note
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.note}</p>
          </div>
        )}

        {product.seo && (
          <div className="mt-6 flex flex-wrap gap-2">
            {product.seo.split(",").map((k: string, i: number) => (
              <span
                key={i}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                #{k.trim()}
              </span>
            ))}
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Related Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => {
              const img = categories.find((c) => c.slug === p.categorySlug)?.image;
              return (
                <Link
                  key={p.slug}
                  to="/products/$category/$product"
                  params={{ category: p.categorySlug, product: p.slug }}
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
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-primary">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function Spec({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className={`mt-1 text-sm font-semibold ${highlight ? "text-accent" : "text-foreground"}`}>
        {value}
      </dd>
    </div>
  );
}