import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { Target, Eye, Heart, ArrowRight, Globe2, ShieldCheck, Handshake, Leaf, Award, TrendingUp, MapPin } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={hero2} alt="" className="absolute inset-0 -z-10 h-full w-full scale-110 animate-ken object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">About JAKKI EXIM</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Carrying the best of India to the world's markets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            JAKKI EXIM is an Indian export–import company built on a simple promise: deliver
            authentic, high-quality, ethically sourced products to international buyers — backed
            by full documentation, on-time shipping and transparent communication.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Story</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">A Local Promise. A Global Standard.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Founded with a mission to give Indian farmers, artisans and MSMEs fair access to
            international markets, JAKKI EXIM has grown into a trusted multi-category export
            house. We consolidate the best of India — from compostable tableware and cold-pressed
            oils to superfoods, millets, honey and handcrafted accessories — and deliver them
            container-ready to buyers across 30+ countries.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every shipment carries our promise: authentic sourcing, quality-controlled processing,
            compliant documentation and on-time delivery. We treat every buyer as a long-term
            partner — not a transaction.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:brightness-110">
            Partner With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={hero3} alt="Indian farms" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-gradient-sky py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">What Drives Us</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Mission. Vision. Values.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "Empower Indian farmers, artisans and manufacturers by giving their products fair access to global markets — with world-class quality controls and logistics." },
              { icon: Eye, title: "Our Vision", desc: "To be one of India's most trusted multi-category export houses — known for reliability, sustainable sourcing and long-term buyer partnerships." },
              { icon: Heart, title: "Our Values", desc: "Integrity, traceability, sustainability and service. Every shipment is treated as a relationship — not a transaction." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-vibrant text-white shadow-glow">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">The JAKKI EXIM advantage</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Quality Assured", desc: "FSSAI, APEDA, phyto and lab-tested consignments." },
            { icon: Handshake, title: "Trusted Partner", desc: "Long-term relationships with buyers across 30+ countries." },
            { icon: Leaf, title: "Sustainable", desc: "Ethical sourcing from FPOs and MSMEs." },
            { icon: Award, title: "Certified", desc: "Full export documentation & country-specific compliance." },
          ].map((it) => (
            <div key={it.title} className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-gradient-vibrant group-hover:text-white">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold">{it.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { v: "11", l: "Product Categories", icon: Globe2 },
            { v: "100+", l: "Verified Products", icon: TrendingUp },
            { v: "30+", l: "Target Countries", icon: MapPin },
            { v: "24h", l: "Quote Response", icon: Handshake },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-3 bg-gradient-to-r from-white via-brand-gold to-brand-teal bg-clip-text text-5xl font-extrabold text-transparent">{s.v}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Journey</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">From local sourcing to global shipments</h2>
        </div>
        <ol className="relative mt-12 border-l-2 border-accent/30 pl-8">
          {[
            { y: "Foundation", t: "JAKKI EXIM established with a mission to connect Indian producers to global buyers." },
            { y: "Sourcing Network", t: "Onboarded FPOs, MSME manufacturers and artisan clusters across 8 Indian states." },
            { y: "Category Expansion", t: "Grew to 11 product categories — eco tableware, oils, powders, honey, jewellery and more." },
            { y: "Global Reach", t: "Regular shipments across the Middle East, EU, US, UK, Africa and ASEAN markets." },
            { y: "Today", t: "100+ verified export-ready SKUs, container-load capacity, 24-hour quote response." },
          ].map((m, i) => (
            <li key={i} className="mb-10 last:mb-0">
              <span className="absolute -left-[11px] mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-vibrant ring-4 ring-background" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{m.y}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.t}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}