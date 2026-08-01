import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight,
  Phone,
  Network,
  FileCheck2,
  ClipboardCheck,
  Ship,
  Handshake,
  FlaskConical,
  Package,
  ShieldCheck,
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

const services = [
  {
    icon: Network,
    title: "Comprehensive Logistics & Stakeholder Coordination",
    desc: "Navigating global trade requires balancing numerous stakeholders across international borders. JAKKI EXIM acts as your single, highly qualified point of contact, managing the entire supply chain infrastructure on your behalf to cultivate a secure, long-term trade relationship.",
    featured: true,
  },
  {
    icon: FileCheck2,
    title: "End-to-End Documentation",
    desc: "We manage all complex legal and financial international trade documentation, ensuring absolute compliance with global export-import regulations.",
  },
  {
    icon: ClipboardCheck,
    title: "Customs Clearance & Compliance",
    desc: "Our team coordinates directly with customs authorities, clearing agents, and border officials to guarantee hassle-free, legally sound compliance at every checkpoint.",
  },
  {
    icon: Ship,
    title: "Freight & Logistics Synchronization",
    desc: "We partner with premier global freight forwarders and carrier networks to secure optimized shipping routes, reliable transit times, and timely, doorstep delivery.",
  },
  {
    icon: Handshake,
    title: "Supplier & Stakeholder Alignment",
    desc: "We maintain continuous, transparent communication with raw material sources, processing facilities, and freight handlers, managing all operational variables so you don't have to.",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Lab Reporting",
    desc: "To support absolute transparency, buyers can request specific, independent third-party laboratory testing reports tailored to their domestic import guidelines.",
  },
  {
    icon: Package,
    title: "Customized Packaging & Labelling",
    desc: "We provide precision packaging and labelling services to ensure goods are securely protected for long-distance transit and fully compliant with your local market marking laws.",
  },
  {
    icon: ShieldCheck,
    title: "Batch-by-Batch Product Testing",
    desc: "We execute strict independent product testing for each and every batch. No cargo is cleared for export without passing a rigorous verification framework.",
  },
  {
    icon: Award,
    title: "Quality Certification Management",
    desc: "We ensure all required international quality certifications are fully processed, validated, and attached to your shipments.",
  },
];

const phases = [
  {
    icon: Building2,
    label: "Corporate Consultation & Alignment",
    desc: "We begin by analyzing your specific international trade requirements, compliance needs, and delivery timelines to map out a secure, long-term supply strategy from day one.",
  },
  {
    icon: Sprout,
    label: "Managed Sourcing & Value-Add Processing",
    desc: "Our team coordinates directly with primary suppliers to secure premium raw materials, managing the entire conversion into high-standard, value-added products.",
  },
  {
    icon: FlaskConical,
    label: "Batch-by-Batch Testing & Certification",
    desc: "Before any cargo is cleared, each batch undergoes strict independent testing. We compile all international quality certifications and third-party lab reports for your approval.",
  },
  {
    icon: Truck,
    label: "Customs Clearance & Freight Synchronization",
    desc: "We manage the complex paperwork, legal filings, and logistics with port authorities and freight forwarders to secure smooth border clearance and optimized shipping routes.",
  },
  {
    icon: MapPin,
    label: "Seamless Doorstep Delivery & Relationship Continuity",
    desc: "Your shipment is delivered safely to your designated port or facility. Post-delivery, we review the process with you to further streamline and strengthen our lifelong business partnership.",
  },
];

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider images={[exportShip, exportPort, exportCustoms, exportWarehouse, exportPackaging]} />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="hero-reveal relative w-full max-w-[900px] rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,249,255,0.84))] p-7 shadow-[0_18px_45px_rgba(10,25,49,0.18)] backdrop-blur-[18px] sm:p-10">
            <div className="absolute left-0 top-6 h-16 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37_0%,#F5D76E_100%)]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(90deg,#D4AF37_0%,#E6C85C_100%)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/90" />
              Our Services
            </span>
            <h1 className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-[0.01em] text-[#0A2540] [font-family:'Playfair_Display','Cormorant_Garamond',serif] sm:text-[2.6rem] lg:text-[3.2rem]">
              End-to-End Export &amp; <span className="text-[#17884B]">Import Management</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
            <p className="mt-5 max-w-[760px] text-[0.98rem] font-medium leading-[1.85] text-[#324A5F] sm:text-[1.02rem]">
              At JAKKI EXIM, we look beyond individual transactions to build permanent, dependable
              global supply chains. We understand that successful international trade relies on the
              seamless synchronization of multiple stakeholders—including suppliers, customs
              authorities, freight forwarders, and regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Total Orchestration
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
            Corporate precision across every moving part.
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
            <p className="text-[1.02rem] leading-[1.9] text-muted-foreground">
              Our core service is the total orchestration of this complex ecosystem. By managing every
              moving part with corporate precision, we mitigate risk, eliminate logistical friction,
              and ensure your business experiences a seamless, reliable trade process from the very
              first order.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Core Services */}
      <section className="bg-gradient-sky py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Core Service Offerings
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
              Comprehensive logistics, rigorous quality assurance.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.9] text-muted-foreground">
              We believe that trust is built on consistency. Our dedicated quality assurance
              protocols are built into our service workflow to give our international buyers complete
              peace of mind before any shipment leaves port.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 110} className={s.featured ? "sm:col-span-2 lg:col-span-3" : ""}>
                <div
                  className={`group h-full rounded-2xl border border-border p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow sm:p-8 ${
                    s.featured
                      ? "bg-[linear-gradient(135deg,#0A2540_0%,#0F2E52_60%,#17884B_100%)] text-white"
                      : "bg-card"
                  }`}
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                      s.featured
                        ? "border border-white/20 bg-white/10 text-[#F5D76E]"
                        : "bg-gradient-vibrant text-white shadow-glow"
                    }`}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`mt-5 text-lg font-bold leading-snug ${
                      s.featured ? "text-2xl [font-family:'Playfair_Display',serif]" : "text-[#0A2540]"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-[1.85] ${
                      s.featured ? "max-w-4xl text-white/85" : "text-muted-foreground"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Step-by-Step Workflow
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
            From First Inquiry to Doorstep Delivery
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.9] text-muted-foreground">
            To demonstrate how JAKKI EXIM seamlessly coordinates all stakeholders to protect your
            investment, we operate under a transparent, 5-stage corporate workflow designed to
            establish lifetime business partnerships.
          </p>
        </Reveal>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-[2px] bg-[linear-gradient(90deg,transparent,rgba(10,37,64,0.15)_12%,rgba(23,136,75,0.4)_50%,rgba(212,175,55,0.4)_88%,transparent)] lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <Reveal key={p.label} as="li" delay={i * 150} className="relative list-none">
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-vibrant text-white shadow-glow">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                    Phase {i + 1}
                  </div>
                  <h3 className="mt-1.5 text-sm font-bold leading-snug text-[#0A2540]">{p.label}</h3>
                  <p className="mt-3 text-xs leading-[1.85] text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-[#0A2540] via-[#0F2E52] to-[#17884B] p-9 text-white shadow-elegant sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="relative grid gap-9 lg:grid-cols-[auto,1fr] lg:items-start lg:gap-12">
              <div className="flex gap-4">
                <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                  <Lock className="h-9 w-9 text-white" />
                </div>
                <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur lg:hidden xl:inline-flex">
                  <ShieldCheck className="h-9 w-9 text-[#F5D76E]" />
                </div>
              </div>
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
                  Privacy, Security, &amp; Compliance Assurance Note
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight [font-family:'Playfair_Display',serif] sm:text-4xl">
                  Confidential, compliant, and built for the long term.
                </h2>
                <div className="mt-5 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
                <p className="mt-6 max-w-3xl text-[1rem] leading-[1.95] text-white/90">
                  At JAKKI EXIM, we treat corporate data, intellectual property, and trade
                  documentation with the highest level of security. All client specifications, supply
                  agreements, and logistical data are strictly protected under non-disclosure
                  frameworks. Our commitment to international legal standards ensures that your trade
                  secrets, financial transactions, and brand integrity remain completely secure
                  throughout our long-term partnership.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-card via-card to-background p-10 text-center shadow-elegant sm:p-14">
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Global Trade Partnership
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
              Let's Build a Long-Term Global Trade Partnership
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.9] text-muted-foreground">
              Share your specifications, compliance needs, and delivery timelines — we will map a
              secure, dependable supply strategy from day one.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-7 py-3.5 text-sm font-bold text-white shadow-glow transition hover:brightness-110 sm:w-auto"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-[#0A2540] shadow-card transition hover:bg-accent/10 sm:w-auto"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}