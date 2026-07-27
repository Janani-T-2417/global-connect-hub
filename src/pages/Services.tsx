import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Ship,
  Handshake,
  ClipboardCheck,
  FlaskConical,
  Package,
  Award,
  Building2,
  Sprout,
  Truck,
  MapPin,
  Lock,
} from "lucide-react";
import exportPort from "@/assets/export-port.jpg";
import exportShip from "@/assets/export-ship.jpg";
import exportWarehouse from "@/assets/export-warehouse.jpg";
import exportPackaging from "@/assets/export-packaging.jpg";
import exportCustoms from "@/assets/export-customs.jpg";

const logistics = [
  { icon: FileCheck2, title: "End-to-End Documentation", desc: "Commercial invoices, packing lists, COO, phytosanitary, fumigation and all shipment paperwork prepared in-house." },
  { icon: ClipboardCheck, title: "Customs Clearance & Compliance", desc: "Regulatory filing at origin and destination handled by experienced clearance partners across 30+ countries." },
  { icon: Ship, title: "Freight & Logistics Synchronization", desc: "Sea, air and multimodal freight coordinated with vetted carriers under FOB, CIF, CFR, DDP and EXW terms." },
  { icon: Handshake, title: "Supplier & Stakeholder Alignment", desc: "FPOs, MSMEs, processors, labs and forwarders orchestrated as a single dependable supply chain." },
];

const quality = [
  { icon: FlaskConical, title: "Third-Party Lab Reporting", desc: "Accredited laboratories verify safety, purity and specification for every export consignment." },
  { icon: Package, title: "Customized Packaging & Labelling", desc: "Bilingual labels, retail-ready packs and market-specific compliance labelling on request." },
  { icon: ShieldCheck, title: "Batch-by-Batch Product Testing", desc: "Every production batch is sampled and cleared before it becomes part of a shipment." },
  { icon: Award, title: "Quality Certification Management", desc: "ISO, FSSAI, APEDA, Spices Board and destination-market certificates prepared and maintained." },
];

const phases = [
  { icon: Building2, title: "Corporate Consultation", desc: "Understand your market, product specification, volumes and compliance requirements." },
  { icon: Sprout, title: "Sourcing & Value-Added Processing", desc: "Procure from verified origins and process to your target grade and packaging." },
  { icon: FlaskConical, title: "Batch Testing & Certification", desc: "Independent labs verify each batch; certificates issued and archived." },
  { icon: Truck, title: "Customs & Freight Synchronization", desc: "Documentation, clearance and vessel booking aligned to your delivery window." },
  { icon: MapPin, title: "Doorstep Delivery & Long-Term Partnership", desc: "Delivered under agreed Incoterms with a dedicated account manager for repeat orders." },
];

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider images={[exportShip, exportPort, exportCustoms, exportWarehouse, exportPackaging]} />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="relative w-full max-w-[880px] rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,249,255,0.84))] p-8 shadow-[0_18px_45px_rgba(10,25,49,0.18)] backdrop-blur-[18px] [background-image:linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0)_35%)] animate-[fadeUp_0.8s_ease-out] sm:p-10">
            <div className="absolute left-0 top-6 h-16 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37_0%,#F5D76E_100%)]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(90deg,#D4AF37_0%,#E6C85C_100%)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/90" />
              Our Services
            </span>
            <h1 className="mt-5 text-[2.2rem] font-bold leading-[1.1] tracking-[0.01em] text-[#0A2540] [font-family:'Cormorant_Garamond',serif] sm:text-[2.8rem] lg:text-[3.4rem]">
              End-to-End Export &amp; <span className="text-[#17884B]">Import Management</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
            <p className="mt-5 max-w-[720px] text-[0.98rem] font-medium leading-[1.85] text-[#324A5F] sm:text-[1.05rem]">
              Building dependable global supply chains with precision, compliance, quality
              assurance, and seamless logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Introduction</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Beyond transactions — permanent, dependable global supply chains.
          </h2>
        </div>
        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          <p className="leading-relaxed text-muted-foreground">
            At JAKKI EXIM, we look beyond individual transactions to build permanent, dependable
            global supply chains. Every engagement begins with a clear understanding of your
            market, product and compliance requirements — and continues with disciplined
            sourcing, batch-tested quality and synchronized logistics designed for long-term
            partnership rather than one-off shipments.
          </p>
        </div>
      </section>

      {/* Core Service Offerings */}
      <section className="bg-gradient-sky py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Core Service Offerings</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Two pillars powering every shipment.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              { title: "Comprehensive Logistics & Stakeholder Coordination", items: logistics },
              { title: "Rigorous Quality Assurance & Compliance", items: quality },
            ].map((block) => (
              <div key={block.title} className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">{block.title}</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {block.items.map((it) => (
                    <div key={it.title} className="rounded-2xl border border-border/70 bg-background/60 p-5 transition hover:-translate-y-0.5 hover:shadow-card">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-vibrant text-white shadow-glow">
                        <it.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 text-sm font-bold text-foreground">{it.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Workflow</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A 5-phase process trusted by international buyers.
          </h2>
        </div>
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-[2px] bg-[linear-gradient(90deg,transparent,rgba(10,37,64,0.15)_15%,rgba(23,136,75,0.35)_50%,rgba(10,37,64,0.15)_85%,transparent)] lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <li key={p.title} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-vibrant text-white shadow-glow">
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Phase {i + 1}</div>
                <h3 className="mt-1 text-sm font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-[#0A2540] via-[#0F2E52] to-[#17884B] p-10 text-white shadow-elegant sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
              <Lock className="h-9 w-9 text-white" />
            </div>
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">Privacy, Security &amp; Compliance</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Confidential, compliant, and built for the long term.
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "NDA protection for every partnership",
                  "Strict client confidentiality across teams",
                  "International trade compliance & sanctions checks",
                  "Secure documentation handling & archives",
                  "Long-term partnership commitments",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#F5D76E]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0A2540] shadow-glow transition hover:bg-[#F5D76E]">
                Start a Confidential Discussion <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}