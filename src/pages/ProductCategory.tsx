import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ChevronRight } from "lucide-react";



export default function CategoryPage() {
  
  const { category: catSlug } = useParams();
  const category = getCategory(catSlug as string);
  if (!category) return <div className="p-20 text-center">Category not found</div>;

  const items = getProductsByCategory(category.slug);
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={category.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/60 to-white/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-foreground/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-white">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-brand-blue">{category.shortName}</span>
          </nav>
          <div className="glass mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">
            {items.length} Products · HS-code mapped
          </div>
          <h1
            className="mt-4 max-w-3xl bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            {category.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/75">{category.name}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
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
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
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