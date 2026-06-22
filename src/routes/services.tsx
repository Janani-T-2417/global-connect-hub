import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Ship, FileCheck2, Package, Search, Handshake, Boxes } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Export Sourcing, Logistics & Compliance | JAKKI EXIM" },
      {
        name: "description",
        content:
          "End-to-end export services from JAKKI EXIM: sourcing, quality control, private labelling, documentation, custom clearance and global logistics.",
      },
      { property: "og:title", content: "JAKKI EXIM Services" },
      { property: "og:description", content: "Sourcing, QC, compliance, logistics — done right." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Search, title: "Product Sourcing", desc: "Direct procurement from FPOs, MSMEs and artisan clusters across India with traceable supply chains." },
  { icon: FileCheck2, title: "Quality Assurance", desc: "Pre-shipment inspection, third-party lab testing and ISO/FSSAI/APEDA compliance documentation." },
  { icon: Package, title: "Private Labelling", desc: "Custom branding, bilingual labels, retail-ready packaging and design support for your market." },
  { icon: Boxes, title: "Export Documentation", desc: "Commercial invoice, packing list, COO, phytosanitary, fumigation and FSSAI certificates." },
  { icon: Ship, title: "Global Logistics", desc: "FOB, CIF, CFR, DDP — sea, air and multimodal freight to 30+ destination countries." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "Dedicated account manager, forecast-based planning and consistent quality across repeat orders." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            End-to-end export services — from farm gate to your warehouse.
          </h1>
          <p className="mt-6 max-w-2xl text-white/85">
            We handle every step of the export lifecycle so you can focus on selling in your home
            market.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A 5-step process trusted by international buyers
          </h2>
          <ol className="mt-10 space-y-6">
            {[
              "Enquiry — share product, quantity, destination and target price",
              "Quotation & Samples — we send specs, samples and CIF pricing within 24h",
              "PI & Payment Terms — proforma invoice, LC / TT / advance options",
              "Production, QC & Documentation — full pre-shipment quality checks",
              "Shipment & Tracking — booking, BL, real-time status to delivery",
            ].map((step, i) => (
              <li key={i} className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                  {i + 1}
                </div>
                <p className="pt-1.5 text-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}