import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JAKKI EXIM — Indian Export Company Built on Trust" },
      {
        name: "description",
        content:
          "Learn about JAKKI EXIM — our mission, vision and commitment to connecting Indian producers to global buyers with quality, compliance and care.",
      },
      { property: "og:title", content: "About JAKKI EXIM" },
      { property: "og:description", content: "A Local to Global Company. Trusted Indian export partner." },
      { property: "og:image", content: heroPort },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-primary">
        <img src={heroPort} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Us</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Carrying the best of India to the world's markets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            JAKKI EXIM is an Indian export–import company built on a simple promise: deliver
            authentic, high-quality, ethically sourced products to international buyers — backed
            by full documentation, on-time shipping and transparent communication.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            icon: Target,
            title: "Our Mission",
            desc:
              "Empower Indian farmers, artisans and manufacturers by giving their products fair access to global markets — with world-class quality controls and logistics.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            desc:
              "To be one of India's most trusted multi-category export houses — known for reliability, sustainable sourcing and long-term buyer partnerships.",
          },
          {
            icon: Heart,
            title: "Our Values",
            desc:
              "Integrity, traceability, sustainability and service. Every shipment is treated as a relationship — not a transaction.",
          },
        ].map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Local to Global Company
            </h2>
            <p className="mt-6 text-muted-foreground">
              Headquartered in India, JAKKI EXIM sources from farmer producer organisations (FPOs),
              MSME manufacturers and traditional artisan clusters spread across the country. We
              consolidate, quality-check, label and ship — so international buyers get a single,
              accountable partner for diverse Indian categories.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our portfolio spans biodegradable tableware, agro commodities, dehydrated and millet
              powders, cold-pressed oils, animal feed, superfoods, natural honey and handcrafted
              fashion accessories — each with documented HS codes, certifications and quality
              standards aligned to destination-country requirements.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "11", l: "Categories" },
              { v: "100+", l: "Products" },
              { v: "30+", l: "Target Markets" },
              { v: "24h", l: "Quote Response" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">{s.v}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}