import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, ShieldCheck, Ship, Leaf, Award, Factory } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { categories, products } from "@/lib/products";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JAKKI EXIM — A Local to Global Company | Premium Indian Exports" },
      {
        name: "description",
        content:
          "JAKKI EXIM is a trusted Indian export–import company supplying eco-friendly tableware, agro-commodities, dehydrated powders, oils, millets, honey and fashion accessories worldwide.",
      },
      { property: "og:title", content: "JAKKI EXIM — A Local to Global Company" },
      {
        property: "og:description",
        content: "Premium Indian exports to global markets — sustainable, compliant, on-time.",
      },
      { property: "og:image", content: heroPort },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <CategoriesSection />
      <WhyUs />
      <FeaturedProducts />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroPort}
          alt="Global shipping port at sunrise"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <Globe2 className="h-3.5 w-3.5" /> Exporting from India to the World
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A Local Promise. <span className="text-accent">A Global Standard.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            JAKKI EXIM connects India's finest farms, factories and artisans to international
            buyers — delivering eco-friendly packaging, agro commodities, powders, oils and
            handcrafted goods with uncompromising quality and on-time logistics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
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
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            11 Curated Categories. {products.length}+ Verified Products.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From compostable tableware to cold-pressed oils and superfood powders — sourced
            responsibly, packed to international standards, shipped worldwide.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/products/$category"
            params={{ category: c.slug }}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.shortName}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16 text-white">
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
                {c.count} Products
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-tight">{c.shortName}</h3>
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
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why JAKKI EXIM
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for international buyers who demand reliability.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Best-sellers from our export catalogue
          </h2>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => {
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
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground sm:px-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90"
            >
              Start an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
