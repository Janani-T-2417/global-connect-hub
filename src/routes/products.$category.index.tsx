import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/$category/")({
  head: ({ params }) => {
    const c = getCategory(params.category);
    const title = c ? `${c.shortName} — Export Catalogue | JAKKI EXIM` : "Category | JAKKI EXIM";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: c
            ? `Export ${c.shortName} from India. ${c.count} verified products with HS codes, certifications and global shipping.`
            : "Product category",
        },
        { property: "og:title", content: title },
        { property: "og:image", content: c?.image ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const c = getCategory(params.category);
    if (!c) throw notFound();
    return { category: c };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Category not found</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-primary">
          Back to products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SiteLayout>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = getProductsByCategory(category.slug);
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={category.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 to-primary/60" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-primary-foreground">
          <nav className="flex items-center gap-2 text-xs text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-white">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{category.shortName}</span>
          </nav>
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {items.length} Products
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {category.shortName}
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">{category.name}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/products/$category/$product"
              params={{ category: p.categorySlug, product: p.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={category.image}
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
                <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
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
                to="/products/$category"
                params={{ category: c.slug }}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary"
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