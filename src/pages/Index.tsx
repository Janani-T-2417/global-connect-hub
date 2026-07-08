import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Ship, Leaf, Award, Factory, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { categories, products } from "@/lib/products";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ImageMarquee } from "@/components/site/ImageMarquee";
import { ProductCard } from "@/components/site/ProductCard";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSlider />
      <TrustBar />
      <div className="py-14">
        <ImageMarquee theme="eco,bagasse,bamboo,sustainable,tableware" title="Eco-Friendly Products" />
      </div>
      <CategoriesSection />
      <div className="bg-brand-sky/60 py-16">
        <ImageMarquee theme="agriculture,farm,india,harvest,grain" title="Agro & Farm Excellence" reverse />
      </div>
      <WhyUs />
      <div className="py-14">
        <ImageMarquee theme="spice,turmeric,powder,indian,color" title="Powders & Spices" />
      </div>
      <FeaturedProducts />
      <div className="bg-brand-sky/60 py-16">
        <ImageMarquee theme="honey,jar,bee,gold,honeycomb" title="Honey & Superfoods" reverse />
      </div>
      <div className="py-14">
        <ImageMarquee theme="cargo,container,port,shipping,logistics" title="Export & Logistics" />
      </div>
      <CTA />
    </SiteLayout>
  );
}

function TrustBar() {
  const stats = [
    { value: `${products.length}+`, label: "Export-Ready Products" },
    { value: `${categories.length}`, label: "Product Categories" },
    { value: "30+", label: "Target Countries" },
    { value: "100%", label: "Compliance Focused" },
  ];
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-3xl p-8 md:grid-cols-4 glass">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div
              className="bg-clip-text text-4xl font-extrabold text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Export
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            11 Curated Categories. {products.length}+ Verified Products.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From compostable tableware to cold-pressed oils and superfood powders — sourced
            responsibly, packed to international standards, shipped worldwide.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
        >
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/products/${c.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.shortName}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-20 text-white">
              <div className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                {c.count} Products
              </div>
              <h3 className="mt-2 text-xl font-semibold leading-tight">{c.shortName}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Quality & Compliance", desc: "FSSAI, APEDA, HS-code mapped consignments with full documentation." },
    { icon: Ship, title: "Global Logistics", desc: "FOB, CIF, DDP — sea, air and multimodal shipping to 30+ countries." },
    { icon: Leaf, title: "Sustainable Sourcing", desc: "Direct partnerships with farmers, FPOs and artisan clusters across India." },
    { icon: Factory, title: "Scalable Supply", desc: "From sample to container loads — consistent quality at any volume." },
    { icon: Award, title: "Buyer Trust", desc: "Pre-shipment inspection, lab testing, and transparent communication." },
    { icon: Globe2, title: "Local to Global", desc: "We carry India's craft, farm and innovation to the world's shelves." },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-sky/40 py-24">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why JAKKI EXIM
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for international buyers who demand reliability.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="glass rounded-3xl p-8 transition duration-500 hover:-translate-y-1.5 hover:shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-elegant"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = [0, 13, 28, 40, 50, 65, 80, 95].map((i) => products[i]).filter(Boolean);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Products
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Best-sellers from our export catalogue
          </h2>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-primary-foreground sm:px-14"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to source from India?
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              Tell us your product, quantity and destination port. We'll respond with samples,
              certifications and best CIF pricing within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-blue shadow-elegant transition hover:-translate-y-0.5"
            >
              Start an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
