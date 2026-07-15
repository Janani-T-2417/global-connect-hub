import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import {
  categories,
  getCategory,
  getProduct,
  getProductsByCategory,
} from "@/lib/products";
import { getProductImage } from "@/lib/productImages";
import { ArrowRight, ChevronRight, Mail, Package2 } from "lucide-react";



export default function ProductPage() {
  
  const { category: catSlug, product: prodSlug } = useParams();
  const category = getCategory(catSlug as string);
  const product = getProduct(prodSlug as string);
  if (!category || !product) return <div className="p-20 text-center">Not found</div>;

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
            <Link to={`/products/${category.slug}`} className="hover:text-primary">
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
              src={getProductImage(product.slug) ?? category.image}
              alt={product.name}
              width={1280}
              height={896}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div>
            <Link
              to={`/products/${category.slug}`}
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
                className="inline-flex items-center gap-2 rounded-md bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803D]"
              >
                <Mail className="h-4 w-4" /> Request Quote
              </Link>
              <Link
                to={`/products/${category.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-[#0B1F3A] bg-card px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#15803D] hover:bg-[#15803D]/10 hover:text-[#15803D]"
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