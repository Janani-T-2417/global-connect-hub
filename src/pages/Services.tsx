import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, Phone, Network, FileCheck2, ClipboardCheck, Ship, Handshake, FlaskConical,
  Package, ShieldCheck, Award, Building2, Sprout, Truck, MapPin, Lock, CheckCircle2,
  Globe2, Leaf, HeartPulse, Gem, Timer, Layers,
} from "lucide-react";
import exportShip from "@/assets/export-ship.jpg";
import exportContainers from "@/assets/export-containers.jpg";
import exportPort from "@/assets/export-port.jpg";
import exportCustoms from "@/assets/export-customs.jpg";
import exportWarehouse from "@/assets/export-warehouse.jpg";
import exportPackaging from "@/assets/export-packaging.jpg";
import exportInspection from "@/assets/export-inspection.jpg";

const logistics = [
  { icon: FileCheck2, title: "End-to-End Documentation", desc: "All complex legal and financial trade documentation managed, with absolute compliance to global export-import regulations." },
  { icon: ClipboardCheck, title: "Customs Clearance & Compliance", desc: "Direct coordination with customs authorities, clearing agents and border officials for hassle-free, legally sound compliance." },
  { icon: Ship, title: "Freight & Logistics Synchronization", desc: "Premier global freight forwarders and carrier networks secure optimized routes, reliable transit and doorstep delivery." },
  { icon: Handshake, title: "Supplier & Stakeholder Alignment", desc: "Continuous, transparent communication with raw material sources, processing facilities and freight handlers." },
];

const quality = [
  { icon: FlaskConical, title: "Third-Party Lab Reporting", desc: "Independent laboratory testing reports on request, tailored to your domestic import guidelines." },
  { icon: Package, title: "Customized Packaging & Labelling", desc: "Precision packaging that protects goods in long-distance transit and complies with local marking laws." },
  { icon: ShieldCheck, title: "Batch-by-Batch Product Testing", desc: "No cargo is cleared for export without passing a rigorous, independent verification framework." },
  { icon: Award, title: "Quality Certification Management", desc: "All required international quality certifications processed, validated and attached to your shipments." },
];

const phases = [
  { icon: Building2, label: "Corporate Consultation & Alignment", desc: "We analyze your trade requirements, compliance needs and delivery timelines to map a secure, long-term supply strategy from day one." },
  { icon: Sprout, label: "Managed Sourcing & Value-Add Processing", desc: "We coordinate directly with primary suppliers to secure premium raw materials, managing conversion into high-standard, value-added products." },
  { icon: FlaskConical, label: "Batch-by-Batch Testing & Certification", desc: "Each batch undergoes strict independent testing. We compile all international certifications and third-party lab reports for your approval." },
  { icon: Truck, label: "Customs Clearance & Freight Synchronization", desc: "We manage paperwork, legal filings and logistics with port authorities and freight forwarders for smooth clearance and optimized routes." },
  { icon: MapPin, label: "Seamless Doorstep Delivery & Continuity", desc: "Your shipment reaches your designated port or facility. Post-delivery we review the process to strengthen our lifelong partnership." },
];

const industries = [
  { icon: Leaf, t: "Biodegradable Solutions" },
  { icon: HeartPulse, t: "Health & Wellness" },
  { icon: Gem, t: "Imitation Jewellery" },
  { icon: Globe2, t: "Demand-Driven Sourcing" },
];

const whyUs = [
  { icon: Network, t: "Single point of contact", d: "One highly qualified team managing your entire supply chain infrastructure." },
  { icon: Layers, t: "Total orchestration", d: "Every moving part managed with corporate precision to eliminate logistical friction." },
  { icon: Timer, t: "Risk mitigated", d: "A seamless, reliable trade process from the very first order." },
  { icon: Handshake, t: "Built for the long term", d: "Permanent, dependable global supply chains rather than one-off transactions." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#8A6D1B]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
      {children}
    </span>
  );
}

function ServiceCard({ icon: Icon, title, desc, i }: { icon: typeof Ship; title: string; desc: string; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-[#0B2545]/10 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-[#15803D]/30 hover:shadow-glow">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#0B2545,#15803D,#D4AF37)] opacity-70 transition group-hover:opacity-100" />
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0B2545,#15803D)] text-white">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <h3 className="mt-2.5 text-[13.5px] font-bold leading-snug text-[#0B2545]">{title}</h3>
        <p className="mt-1.5 text-[12px] font-medium leading-[1.65] text-[#333333]">{desc}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider images={[exportShip, exportContainers, exportPort, exportCustoms]} />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="hero-reveal relative w-full max-w-[860px] rounded-[20px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,248,255,0.88))] p-6 shadow-[0_18px_45px_rgba(10,25,49,0.2)] backdrop-blur-[14px] sm:p-9">
            <div className="absolute left-0 top-6 h-14 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37,#F5D76E)]" />
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="mt-4 text-[1.85rem] font-bold leading-[1.12] text-[#0B2545] [font-family:'Playfair_Display','Cormorant_Garamond',serif] sm:text-[2.4rem] lg:text-[2.9rem]">
              End-to-End Export &amp; <span className="text-[#15803D]">Import Management</span>
            </h1>
            <div className="mt-3.5 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#D4AF37,#F5D76E)]" />
            <p className="mt-4 max-w-[720px] text-[0.95rem] font-medium leading-[1.7] text-[#333333]">
              At JAKKI EXIM, we look beyond individual transactions to build permanent, dependable
              global supply chains. Successful international trade relies on the seamless
              synchronization of multiple stakeholders — suppliers, customs authorities, freight
              forwarders and regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview strip */}
      <section className="border-y border-[#0B2545]/10 bg-[linear-gradient(90deg,#0B2545_0%,#123A6B_55%,#15803D_100%)] py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr,auto] lg:px-8">
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#F5D76E]">Total Orchestration</span>
            <p className="mt-2 max-w-4xl text-[13.5px] font-medium leading-[1.8] text-white/95">
              Our core service is the total orchestration of this complex ecosystem. By managing every
              moving part with corporate precision, we mitigate risk, eliminate logistical friction,
              and ensure your business experiences a seamless, reliable trade process from the very
              first order.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#0B2545] transition hover:bg-[#F5D76E]">
            Talk to Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Core Service 1: Logistics */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr,1fr] lg:gap-12">
          <Reveal>
            <img src={exportContainers} alt="Container terminal logistics operations" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
          </Reveal>
          <Reveal delay={110}>
            <Eyebrow>Core Service 01</Eyebrow>
            <h2 className="mt-3.5 text-[1.55rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[1.95rem]">
              Comprehensive Logistics &amp; Stakeholder Coordination
            </h2>
            <p className="mt-3 text-[0.94rem] font-medium leading-[1.75] text-[#333333]">
              Navigating global trade requires balancing numerous stakeholders across international
              borders. JAKKI EXIM acts as your single, highly qualified point of contact, managing the
              entire supply chain infrastructure on your behalf to cultivate a secure, long-term trade
              relationship.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {logistics.map((s, i) => (
                <ServiceCard key={s.title} {...s} i={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Service 2: Quality */}
      <section className="border-y border-[#0B2545]/8 bg-[linear-gradient(180deg,#EEF5F1_0%,#F6F9FC_100%)] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr,0.9fr] lg:gap-12">
            <Reveal>
              <Eyebrow>Core Service 02</Eyebrow>
              <h2 className="mt-3.5 text-[1.55rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[1.95rem]">
                Rigorous Quality Assurance &amp; Compliance Services
              </h2>
              <p className="mt-3 text-[0.94rem] font-medium leading-[1.75] text-[#333333]">
                We believe that trust is built on consistency. Our dedicated quality assurance
                protocols are built into our service workflow to give our international buyers
                complete peace of mind before any shipment leaves port.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {quality.map((s, i) => (
                  <ServiceCard key={s.title} {...s} i={i} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={130} className="grid gap-3">
              <img src={exportInspection} alt="Independent product testing and quality inspection" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover shadow-elegant" />
              <img src={exportPackaging} alt="Customized export packaging and labelling" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover shadow-elegant" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal className="max-w-3xl">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-3.5 text-[1.55rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[1.95rem]">
            From First Inquiry to Doorstep Delivery
          </h2>
          <p className="mt-3 text-[0.94rem] font-medium leading-[1.75] text-[#333333]">
            To demonstrate how JAKKI EXIM seamlessly coordinates all stakeholders to protect your
            investment, we operate under a transparent, 5-stage corporate workflow designed to
            establish lifetime business partnerships.
          </p>
        </Reveal>
        <div className="relative mt-8">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-[2px] bg-[linear-gradient(90deg,transparent,rgba(11,37,69,0.2)_12%,rgba(21,128,61,0.45)_50%,rgba(212,175,55,0.45)_88%,transparent)] lg:block" />
          <ol className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <Reveal key={p.label} as="li" delay={i * 120} className="list-none">
                <div className="h-full rounded-xl border border-[#0B2545]/10 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0B2545,#15803D)] text-white shadow-glow">
                      <p.icon className="h-[18px] w-[18px]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6D1B]">Phase {i + 1}</span>
                  </div>
                  <h3 className="mt-2.5 text-[13px] font-bold leading-snug text-[#0B2545]">{p.label}</h3>
                  <p className="mt-1.5 text-[11.5px] font-medium leading-[1.65] text-[#333333]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why clients choose us + industries */}
      <section className="border-y border-[#0B2545]/8 bg-[linear-gradient(180deg,#F3F7FB_0%,#FFFFFF_100%)] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <Eyebrow>Why Clients Choose Us</Eyebrow>
              <h2 className="mt-3.5 text-[1.5rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[1.85rem]">
                One partner for every moving part.
              </h2>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {whyUs.map((w, i) => (
                  <Reveal key={w.t} delay={i * 80}>
                    <div className="h-full rounded-xl border border-[#0B2545]/10 bg-white p-3.5 shadow-card transition hover:-translate-y-1">
                      <w.icon className="h-[18px] w-[18px] text-[#15803D]" />
                      <div className="mt-2 text-[12.5px] font-bold text-[#0B2545]">{w.t}</div>
                      <p className="mt-1 text-[11.5px] font-medium leading-[1.6] text-[#333333]">{w.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Industries Served</Eyebrow>
              <h2 className="mt-3.5 text-[1.5rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[1.85rem]">
                High-value sectors, globally delivered.
              </h2>
              <ul className="mt-4 space-y-2">
                {industries.map((x) => (
                  <li key={x.t} className="flex items-center gap-3 rounded-xl border border-[#0B2545]/10 bg-white px-4 py-3 shadow-card">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B2545]/8 text-[#0B2545]">
                      <x.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] font-bold text-[#0B2545]">{x.t}</span>
                    <CheckCircle2 className="ml-auto h-4 w-4 text-[#15803D]" />
                  </li>
                ))}
              </ul>
              <img src={exportWarehouse} alt="Global warehousing and supply chain" loading="lazy" className="mt-3 aspect-[16/9] w-full rounded-2xl object-cover shadow-elegant" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(120deg,#0B2545_0%,#123A6B_60%,#15803D_100%)] p-6 text-white shadow-elegant sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/25 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[auto,1fr] lg:gap-8">
              <div className="flex gap-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-[#F5D76E]" />
                </div>
              </div>
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-white">
                  Privacy, Security &amp; Compliance Assurance
                </span>
                <h2 className="mt-3 text-[1.4rem] font-bold leading-tight [font-family:'Playfair_Display',serif] sm:text-[1.8rem]">
                  Confidential, compliant, built for the long term.
                </h2>
                <p className="mt-3 max-w-4xl text-[13px] font-medium leading-[1.85] text-white/92">
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] border border-[#0B2545]/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F7FB_100%)] p-7 text-center shadow-elegant sm:p-11">
            <Eyebrow>Global Trade Partnership</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2.1rem]">
              Let's Build a Long-Term Global Trade Partnership
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] font-medium leading-[1.75] text-[#333333]">
              Share your specifications, compliance needs and delivery timelines — we will map a
              secure, dependable supply strategy from day one.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:brightness-110 sm:w-auto">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0B2545]/20 bg-white px-6 py-3 text-sm font-bold text-[#0B2545] shadow-card transition hover:bg-[#0B2545]/5 sm:w-auto">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
