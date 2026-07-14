import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight, Globe2, ShieldCheck, Ship, Leaf, Award, Factory,
  MessageCircle, Mail, Star, Quote, ChevronLeft, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { categories, products } from "@/lib/products";
import heroPort from "@/assets/hero-port.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { img: hero1, eyebrow: "Global Trade Reimagined", title: "A Local Promise.", accent: "A Global Standard.", desc: "JAKKI EXIM ships India's finest farms, factories and artisans to buyers across 30+ countries — with certifications, documentation and on-time containers." },
  { img: hero2, eyebrow: "Warehousing & Logistics", title: "Consolidated. Compliant.", accent: "Container-Ready.", desc: "From sample cartons to full container loads — quality-checked, labelled and dispatched from our export-ready warehousing hubs." },
  { img: hero3, eyebrow: "Sustainable Sourcing", title: "From Indian Farms", accent: "to the World's Shelves.", desc: "Direct partnerships with FPOs, MSMEs and artisan clusters — traceable, ethical and premium quality at every stage." },
  { img: heroPort, eyebrow: "FOB · CIF · DDP", title: "Any Port.", accent: "Any Incoterm.", desc: "Sea, air and multimodal shipping backed by pre-shipment inspection, lab testing and end-to-end tracking." },
  { img: hero4, eyebrow: "30+ Countries Served", title: "Local to Global.", accent: "One Trusted Partner.", desc: "Middle East, EU, US, UK, Africa, ASEAN and beyond — one accountable export house for diverse Indian categories." },
];

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <CategoriesSection />
      <WhyUs />
      <FeaturedProducts />
      <ExportCountries />
      <Testimonials />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {slides.map((sl, idx) => (
          <img
            key={idx}
            src={sl.img}
            alt=""
            width={1920}
            height={1080}
            loading={idx === 0 ? undefined : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100 animate-ken" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.16_0.05_260/0.78)_0%,oklch(0.16_0.05_260/0.55)_60%,oklch(0.16_0.05_260/0.35)_100%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div key={i} className="max-w-3xl animate-slide-fade text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <Globe2 className="h-3.5 w-3.5" /> {s.eyebrow}
          </span>
          <h1 className="hero-heading mt-6 text-[2.5rem] font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[80px]">
            {s.title} <span className="text-brand-gold">{s.accent}</span>
          </h1>
          <p className="mt-6 max-w-[700px] text-lg font-medium leading-[1.8] text-white/95 sm:text-xl">
            {s.desc}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-elegant transition hover:scale-[1.02] hover:brightness-95">
              Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
      {/* slider controls */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
      <button aria-label="Previous" onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/30 lg:inline-flex">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button aria-label="Next" onClick={() => setI((v) => (v + 1) % slides.length)}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/30 lg:inline-flex">
        <ChevronRight className="h-5 w-5" />
      </button>
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
    <section className="relative border-b border-border bg-gradient-sky">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="bg-gradient-vibrant bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <Leaf className="h-3.5 w-3.5" /> What We Export
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            11 Curated Categories.<br/><span className="bg-gradient-vibrant bg-clip-text text-transparent">{products.length}+ Verified Products.</span>
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
            to={`/products/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.shortName}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-20 text-white">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                {c.count} Products
              </div>
              <h3 className="mt-2 text-xl font-bold leading-tight">{c.shortName}</h3>
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="h-3 w-3" />
              </div>
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
    <section className="relative overflow-hidden bg-gradient-sky py-24">
      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Why JAKKI EXIM
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for international buyers who demand reliability.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-vibrant text-white shadow-glow transition group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = [0, 1, 2, 15, 30, 45, 60, 80].map((i) => products[i]).filter(Boolean);
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <Star className="h-3.5 w-3.5" />
            Featured Products
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Best-sellers from our export catalogue
          </h2>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => {
          const img = categories.find((c) => c.slug === p.categorySlug)?.image;
          return (
            <div key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-elegant">
              <Link to={`/products/${p.categorySlug}/${p.slug}`} className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow">
                  HS {p.hs6}
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
          );
        })}
      </div>
    </section>
  );
}

function ExportCountries() {
  const countries = [
    "🇺🇸 USA", "🇬🇧 UK", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇩🇪 Germany", "🇫🇷 France",
    "🇦🇺 Australia", "🇸🇬 Singapore", "🇯🇵 Japan", "🇨🇦 Canada", "🇳🇱 Netherlands",
    "🇰🇷 South Korea", "🇲🇾 Malaysia", "🇿🇦 South Africa", "🇧🇷 Brazil", "🇮🇹 Italy",
    "🇪🇸 Spain", "🇴🇲 Oman", "🇶🇦 Qatar", "🇰🇼 Kuwait", "🇹🇭 Thailand", "🇻🇳 Vietnam",
  ];
  return (
    <section className="border-y border-border bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <Globe2 className="h-3.5 w-3.5" /> Export Countries
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Shipping to 30+ nations worldwide</h2>
        </div>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {[...countries, ...countries].map((c, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold backdrop-blur">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "JAKKI EXIM's compliance documentation and packaging quality was flawless — landed customs-ready.", name: "Ahmed R.", role: "Importer, UAE" },
    { quote: "Consistent quality from sample to container. Our shelves have never looked better.", name: "Sophie L.", role: "Retail Buyer, France" },
    { quote: "Responsive team, competitive pricing and on-time shipping. A true long-term partner.", name: "David K.", role: "Distributor, USA" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Trusted by importers across the globe
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="relative rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />
            <div className="flex gap-0.5 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-5 leading-relaxed text-foreground">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-vibrant font-bold text-white">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "What are your minimum order quantities?", a: "MOQ varies by product — from a single pallet for premium categories up to full container loads (FCL) for commodities. Share your requirement and we'll confirm." },
    { q: "Which Incoterms do you support?", a: "We ship FOB, CIF, CFR and DDP from major Indian ports. Sea, air and multimodal — routed to your destination port of choice." },
    { q: "Do you provide samples?", a: "Yes — pre-shipment samples are available for most SKUs. Courier costs are billed at cost and often adjusted against the first PO." },
    { q: "What certifications do you provide?", a: "APEDA, FSSAI, Spices Board, Phytosanitary, Certificate of Origin, and product-specific test reports. Halal / Kosher / Organic on request." },
    { q: "How long does shipping take?", a: "Typically 15–35 days by sea depending on destination. Air freight in 3–7 days. We confirm ETA with every quotation." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-gradient-sky py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Frequently asked questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-bold text-foreground">{it.q}</span>
                <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-vibrant px-8 py-16 text-white shadow-elegant sm:px-14">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-brand-gold/40 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to source from India?
            </h2>
            <p className="mt-4 max-w-xl text-white/90">
              Tell us your product, quantity and destination port. We'll respond with samples,
              certifications and best CIF pricing within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:scale-[1.02]"
            >
              Start an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
