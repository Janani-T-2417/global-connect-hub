import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { ArrowLeft, ChevronRight, Mail, MessageCircle } from "lucide-react";



export default function CategoryPage() {
  
  const { category: catSlug } = useParams();
  const category = getCategory(catSlug as string);
  if (!category) return <div className="p-20 text-center">Category not found</div>;

  const items = getProductsByCategory(category.slug);
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={category.image} alt="" className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover animate-ken" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/80">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/products" className="hover:text-white">Products</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">{category.shortName}</span>
            </nav>
            <Link to="/products" className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/25">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Products
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {items.length} Products
              </span>
              <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                {category.shortName}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <div key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-elegant">
              <Link to={`/products/${p.categorySlug}/${p.slug}`} className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={category.image}
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
                  <Link to="/contact" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-primary-foreground transition hover:brightness-110">
                    <Mail className="h-3.5 w-3.5" /> Inquiry
                  </Link>
                  <a href={`https://wa.me/910000000000?text=${encodeURIComponent("Hi JAKKI EXIM, I'm interested in " + p.name)}`}
                     target="_blank" rel="noreferrer"
                     className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-[11px] font-bold text-white transition hover:brightness-110">
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