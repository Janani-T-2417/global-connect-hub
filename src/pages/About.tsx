import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, Phone, Sprout, Factory, FlaskConical, Award, ShieldCheck, Handshake,
  Repeat, Leaf, Target, Eye, Globe2, TrendingUp, Gem, HeartPulse, PackageCheck, Ship,
} from "lucide-react";
import exportContainers from "@/assets/export-containers.jpg";
import exportPort from "@/assets/export-port.jpg";
import exportShip from "@/assets/export-ship.jpg";
import exportWarehouse from "@/assets/export-warehouse.jpg";
import exportProcessing from "@/assets/export-processing.jpg";
import exportInspection from "@/assets/export-inspection.jpg";
import exportMeeting from "@/assets/export-meeting.jpg";

const differentiators = [
  { icon: Sprout, title: "Strategic Sourcing", desc: "Premium, unrefined raw materials sourced directly from verified, ethical origins." },
  { icon: Factory, title: "Advanced Processing", desc: "Deep sector knowledge converts raw materials into premium, value-added finished goods." },
  { icon: FlaskConical, title: "Batch-by-Batch Testing", desc: "Stringent independent testing for every batch. Nothing leaves our facility without meeting strict verification criteria." },
  { icon: Award, title: "International Certification", desc: "Recognized quality certifications keep output compliant with global trade regulations and benchmarks." },
];

const pillars = [
  { icon: ShieldCheck, n: "01", title: "Uncompromised Quality", desc: "Continuous quality certification and batch testing with rigorous control metrics, so products consistently meet and exceed international market standards.", tint: "from-[#0B2545] to-[#123A6B]" },
  { icon: Handshake, n: "02", title: "Enduring Trust", desc: "Transparent communication, ethical compliance and punctual logistics build corporate alliances from the seamless execution of your first order.", tint: "from-[#0F3D2E] to-[#15803D]" },
  { icon: Repeat, n: "03", title: "Long-Term Relationships", desc: "We do not look for one-time transactions — we maintain stable, collaborative partnerships that drive continuous growth and shared success.", tint: "from-[#7A5B12] to-[#D4AF37]" },
  { icon: Leaf, n: "04", title: "Eco-Friendly Practices", desc: "Sustainable, environmentally conscious sourcing and processing ensures a reliable long-term supply of green products.", tint: "from-[#123A6B] to-[#15803D]" },
];

const sectors = [
  { icon: Leaf, title: "Biodegradable Solutions", desc: "Sustainable, eco-conscious product lines for green-focused markets." },
  { icon: HeartPulse, title: "Health & Wellness", desc: "Advanced health and wellness products for discerning buyers." },
  { icon: Gem, title: "Imitation Jewellery", desc: "Premium imitation jewellery crafted for global retail demand." },
];

const stats = [
  { icon: Globe2, k: "Global", v: "International buyer network" },
  { icon: PackageCheck, k: "100%", v: "Batch-tested consignments" },
  { icon: Award, k: "Certified", v: "International quality standards" },
  { icon: Ship, k: "End-to-End", v: "Export & import management" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#8A6D1B]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
      {children}
    </span>
  );
}

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider images={[exportContainers, exportPort, exportShip, exportWarehouse]} />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="hero-reveal relative w-full max-w-[860px] rounded-[20px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,248,255,0.88))] p-6 shadow-[0_18px_45px_rgba(10,25,49,0.2)] backdrop-blur-[14px] sm:p-9">
            <div className="absolute left-0 top-6 h-14 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37,#F5D76E)]" />
            <Eyebrow>About JAKKI EXIM</Eyebrow>
            <h1 className="mt-4 text-[1.85rem] font-bold leading-[1.12] text-[#0B2545] [font-family:'Playfair_Display','Cormorant_Garamond',serif] sm:text-[2.4rem] lg:text-[2.9rem]">
              Global Trade Built on Precision, Quality, and <span className="text-[#15803D]">Lasting Alliances</span>
            </h1>
            <div className="mt-3.5 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#D4AF37,#F5D76E)]" />
            <p className="mt-4 max-w-[720px] text-[0.95rem] font-medium leading-[1.7] text-[#333333]">
              Your premier partner in international export and import operations — a dynamic,
              knowledge-driven enterprise bridging exceptional regional sourcing and stringent
              global market demands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[#0B2545]/10 bg-[linear-gradient(90deg,#0B2545_0%,#123A6B_55%,#15803D_100%)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.k} className="flex items-center gap-3 py-5">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                <s.icon className="h-5 w-5 text-[#F5D76E]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white sm:text-base">{s.k}</div>
                <div className="text-[11px] font-medium leading-snug text-white/80">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview — alternating */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="mt-3.5 text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2rem]">
              Agility and profound domain expertise, working together.
            </h2>
            <div className="mt-3 h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,#15803D,#D4AF37)]" />
            <p className="mt-4 text-[0.95rem] font-medium leading-[1.75] text-[#333333]">
              Welcome to JAKKI EXIM, your premier partner in international export and import
              operations. We are a dynamic, knowledge-driven enterprise dedicated to bridging the gap
              between exceptional regional sourcing and stringent global market demands.
            </p>
            <p className="mt-3 text-[0.95rem] font-medium leading-[1.75] text-[#333333]">
              Operating at the intersection of agility and profound domain expertise, we specialize
              in delivering high-value products across diverse, high-demand sectors. Guided by a
              commitment to operational excellence, we serve discerning international buyers who
              never compromise on quality, reliability, or environmental responsibility. From our
              very first order together, our ultimate objective is to cultivate deep, enduring, and
              mutually beneficial long-term relationships with every buyer we serve.
            </p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {sectors.map((s) => (
                <div key={s.title} className="rounded-xl border border-[#0B2545]/10 bg-white p-3.5 shadow-card transition hover:-translate-y-1 hover:border-[#15803D]/30">
                  <s.icon className="h-5 w-5 text-[#15803D]" />
                  <div className="mt-2 text-[12.5px] font-bold leading-snug text-[#0B2545]">{s.title}</div>
                  <p className="mt-1 text-[11.5px] font-medium leading-[1.6] text-[#333333]">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <img src={exportWarehouse} alt="Export warehousing and container loading operations" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-xl bg-[linear-gradient(135deg,#0B2545,#15803D)] px-4 py-3 text-white shadow-glow sm:block">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5D76E]">Local Quality</div>
                <div className="text-sm font-bold">to Global Standards</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Differentiation */}
      <section className="border-y border-[#0B2545]/8 bg-[linear-gradient(180deg,#F6F9FC_0%,#EEF5F1_100%)] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr,0.85fr] lg:gap-12">
            <Reveal>
              <Eyebrow>Our Core Differentiation</Eyebrow>
              <h2 className="mt-3.5 text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2rem]">
                Value-Added Processing &amp; Rigorous Testing
              </h2>
              <p className="mt-3 max-w-2xl text-[0.95rem] font-medium leading-[1.75] text-[#333333]">
                We do not merely move commodities across borders; we elevate them. Our core strength
                lies in rigorous, end-to-end supply chain integration and an unwavering dedication to
                absolute product integrity.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {differentiators.map((d, i) => (
                  <Reveal key={d.title} delay={i * 90}>
                    <div className="group relative h-full overflow-hidden rounded-xl border border-[#0B2545]/10 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#0B2545,#15803D,#D4AF37)]" />
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0B2545,#15803D)] text-white">
                        <d.icon className="h-[18px] w-[18px]" />
                      </div>
                      <h3 className="mt-2.5 text-[13.5px] font-bold leading-snug text-[#0B2545]">{d.title}</h3>
                      <p className="mt-1.5 text-[12px] font-medium leading-[1.65] text-[#333333]">{d.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-4 rounded-xl border-l-[3px] border-[#D4AF37] bg-white/70 px-4 py-3 text-[12.5px] font-semibold leading-[1.7] text-[#0B2545]">
                This rigorous framework ensures that your very first shipment establishes a solid
                foundation for a lifetime corporate partnership.
              </p>
            </Reveal>
            <Reveal delay={140} className="grid gap-3">
              <img src={exportProcessing} alt="Value-added processing facility" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover shadow-elegant" />
              <img src={exportInspection} alt="Independent laboratory product testing" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover shadow-elegant" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal className="max-w-3xl">
          <Eyebrow>Corporate Values</Eyebrow>
          <h2 className="mt-3.5 text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2rem]">
            Pillars of Our Corporate Philosophy
          </h2>
          <p className="mt-3 text-[0.95rem] font-medium leading-[1.75] text-[#333333]">
            Our global trading operations are anchored by four non-negotiable principles designed to
            support your business year after year.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className={`group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.tint} p-5 text-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow`}>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/15">
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[1.4rem] font-bold leading-none text-white/25 [font-family:'Playfair_Display',serif]">{p.n}</span>
                </div>
                <h3 className="mt-3 text-[14.5px] font-bold leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-[12px] font-medium leading-[1.7] text-white/90">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-[#0B2545]/8 bg-[linear-gradient(180deg,#F3F7FB_0%,#FFFFFF_100%)] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <Eyebrow>Mission &amp; Vision</Eyebrow>
            <h2 className="mt-3.5 text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2rem]">
              Where we stand, and where we are going.
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {[
              { icon: Target, label: "Our Mission", accent: "#15803D", text: "To deliver exceptional, value-added products that consistently meet global standards through rigorous batch testing and certified quality processes. We strive to be an agile, demand-driven trade partner that provides seamless import-export solutions, building absolute trust and cultivating long-term corporate relationships with international buyers from the very first order." },
              { icon: Eye, label: "Our Vision", accent: "#D4AF37", text: "To become a globally recognized and trusted leader in the import-export industry, known for bridging global market demands with sustainable, eco-friendly practices. We aim to set the benchmark for operational excellence, where every international transaction transforms into an enduring, lifelong business partnership." },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 110}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-[#0B2545]/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="absolute inset-y-0 left-0 w-[4px]" style={{ background: m.accent }} />
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${m.accent}1A`, color: m.accent }}>
                    <m.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#0B2545] [font-family:'Playfair_Display',serif]">{m.label}</h3>
                  <p className="mt-2 text-[13px] font-medium leading-[1.8] text-[#333333]">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market demands */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="order-2 lg:order-1">
            <img src={exportMeeting} alt="International business partnership meeting" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
          </Reveal>
          <Reveal delay={110} className="order-1 lg:order-2">
            <Eyebrow>Global Partnerships</Eyebrow>
            <h2 className="mt-3.5 text-[1.6rem] font-bold leading-tight text-[#0B2545] [font-family:'Playfair_Display',serif] sm:text-[2rem]">
              Meeting Evolving Market Demands
            </h2>
            <div className="mt-3 h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,#15803D,#D4AF37)]" />
            <p className="mt-4 text-[0.95rem] font-medium leading-[1.75] text-[#333333]">
              In a rapidly fluctuating global economy, static inventories fall short. Beyond our core
              specializations, our trading infrastructure is architected for fluid adaptability.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { icon: TrendingUp, t: "Global market intelligence", d: "Actively monitored to guide agile, demand-driven sourcing." },
                { icon: Globe2, t: "Competitive edge", d: "Our international partners always maintain a distinct advantage." },
                { icon: Handshake, t: "Building global futures", d: "We don't just clear transactions — we build futures together, from day one." },
              ].map((x) => (
                <li key={x.t} className="flex gap-3 rounded-xl border border-[#0B2545]/10 bg-white p-3 shadow-card">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B2545]/8 text-[#0B2545]">
                    <x.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold text-[#0B2545]">{x.t}</span>
                    <span className="block text-[11.5px] font-medium leading-[1.6] text-[#333333]">{x.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(120deg,#0B2545_0%,#123A6B_55%,#15803D_100%)] p-7 text-center shadow-elegant sm:p-11">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/25 blur-3xl" />
            <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-white">
              Long-Term Global Partnerships
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-[1.6rem] font-bold leading-tight text-white [font-family:'Playfair_Display',serif] sm:text-[2.1rem]">
              Ready to Build Long-Term Global Partnerships?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] font-medium leading-[1.75] text-white/90">
              Share your specifications, compliance needs and delivery timelines — we will map a
              secure, dependable supply strategy from day one.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0B2545] shadow-glow transition hover:bg-[#F5D76E] sm:w-auto">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
