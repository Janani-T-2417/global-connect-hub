import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight,
  Sprout,
  Factory,
  FlaskConical,
  BadgeCheck,
  ShieldCheck,
  Handshake,
  Repeat,
  Leaf,
  Target,
  Eye,
  Phone,
} from "lucide-react";
import exportPort from "@/assets/export-port.jpg";
import exportShip from "@/assets/export-ship.jpg";
import exportWarehouse from "@/assets/export-warehouse.jpg";
import exportCustoms from "@/assets/export-customs.jpg";
import exportMeeting from "@/assets/export-meeting.jpg";

const differentiation = [
  {
    icon: Sprout,
    title: "Strategic Sourcing",
    desc: "We source premium, unrefined raw materials directly from verified, ethical origins.",
  },
  {
    icon: Factory,
    title: "Advanced Processing",
    desc: "Leveraging deep, qualified knowledge of our product sectors, we process these raw materials into premium and value-added finished goods.",
  },
  {
    icon: FlaskConical,
    title: "Batch-by-Batch Product Testing",
    desc: "To guarantee total compliance, we enforce stringent independent product testing for each and every batch. No product leaves our facility without meeting strict verification criteria.",
  },
  {
    icon: BadgeCheck,
    title: "International Quality Certification",
    desc: "Our processes are backed by recognized quality certifications, ensuring that our final output seamlessly complies with international trade regulations and global quality benchmarks. This rigorous framework ensures that your very first shipment establishes a solid foundation for a lifetime corporate partnership.",
  },
];

const philosophy = [
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality",
    desc: "Through continuous quality certification and batch testing, we implement rigorous quality control metrics to ensure all products consistently meet and exceed international market standards.",
  },
  {
    icon: Handshake,
    title: "Enduring Trust",
    desc: "We view international trade as an exercise in relationship-building. Through transparent communication, ethical compliance, and punctual logistics, we foster corporate alliances that begin with the seamless execution of your first order.",
  },
  {
    icon: Repeat,
    title: "Commitment to Long-Term Relationships",
    desc: "We do not look for one-time transactions. We are deeply committed to maintaining stable, collaborative, and long-term relationships with each of our buyers, ensuring continuous growth and shared success across the years.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    desc: "Recognizing the shift in global consumer demands, our supply chain and processing methodologies prioritize sustainable, environmentally conscious practices, ensuring a reliable, long-term supply of green products for your business.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[540px]">
        <HeroSlider images={[exportShip, exportPort, exportWarehouse, exportCustoms]} />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="hero-reveal absolute top-[50px] left-[70px] w-full max-w-[680px] rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,249,255,0.84))] p-6 shadow-[0_18px_45px_rgba(10,25,49,0.18)] backdrop-blur-[18px] sm:top-[60px] sm:left-[72px] sm:p-8">
            <div className="absolute left-0 top-6 h-16 w-[3px] rounded-full bg-[linear-gradient(180deg,#D4AF37_0%,#F5D76E_100%)]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(90deg,#D4AF37_0%,#E6C85C_100%)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/90" />
              About Us
            </span>
            <h1 className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-[0.01em] text-[#0A2540] [font-family:'Playfair_Display','Cormorant_Garamond',serif] sm:text-[2.6rem] lg:text-[3.2rem]">
              About <span className="text-[#17884B]">JAKKI EXIM</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
            <p className="mt-5 max-w-[720px] text-[1.05rem] font-medium leading-[1.6] text-[#324A5F] [font-family:'Playfair_Display','Cormorant_Garamond',serif] sm:text-[1.35rem]">
              Global Trade Built on Precision, Quality, and Lasting Alliances
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <Reveal>
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Introduction
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.85rem]">
            Global Trade Built on Precision, Quality, and Lasting Alliances
          </h2>
          <div className="mt-5 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
          <p className="mt-7 text-[1.02rem] leading-[1.9] text-muted-foreground">
            Welcome to JAKKI EXIM, your premier partner in international export and import
            operations. We are a dynamic, knowledge-driven enterprise dedicated to bridging the gap
            between exceptional regional sourcing and stringent global market demands.
          </p>
          <p className="mt-5 text-[1.02rem] leading-[1.9] text-muted-foreground">
            Operating at the intersection of agility and profound domain expertise, we specialize in
            delivering high-value products across diverse, high-demand sectors—including sustainable
            biodegradable solutions, advanced health and wellness products, and premium imitation
            jewellery. Guided by a commitment to operational excellence, we serve discerning
            international buyers who never compromise on quality, reliability, or environmental
            responsibility. From our very first order together, our ultimate objective is to
            cultivate deep, enduring, and mutually beneficial long-term relationships with every
            buyer we serve.
          </p>
        </Reveal>
        <Reveal delay={140} className="relative">
          <div className="relative overflow-hidden rounded-[28px] shadow-elegant">
            <img
              src={exportWarehouse}
              alt="Export warehouse and container loading operations"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/45 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-card sm:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Local Quality</p>
            <p className="mt-1 text-sm font-semibold text-[#0A2540]">to Global Standards</p>
          </div>
        </Reveal>
      </section>

      {/* Core Differentiation */}
      <section className="bg-gradient-sky py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Our Core Differentiation
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
              Value-Added Processing &amp; Rigorous Testing
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.9] text-muted-foreground">
              At JAKKI EXIM, we do not merely move commodities across borders; we elevate them. Our
              core strength lies in our rigorous, end-to-end supply chain integration and an
              unwavering dedication to absolute product integrity.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {differentiation.map((d, i) => (
              <Reveal key={d.title} delay={i * 110}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-vibrant text-white shadow-glow">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-[#0A2540]">{d.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our Corporate Philosophy
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
            Pillars of Our Corporate Philosophy
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.9] text-muted-foreground">
            Our global trading operations are anchored by four non-negotiable principles designed to
            support your business year after year.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#0A2540_0%,#17884B_55%,#D4AF37_100%)]" />
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-gradient-vibrant group-hover:text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                  Pillar {i + 1}
                </div>
                <h3 className="mt-1.5 text-lg font-bold leading-snug text-[#0A2540]">{p.title}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0A2540_0%,#0F2E52_55%,#17884B_100%)] py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Mission and Vision
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
              Purpose that carries every shipment forward.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver exceptional, value-added products that consistently meet global standards through rigorous batch testing and certified quality processes. We strive to be an agile, demand-driven trade partner that provides seamless import-export solutions, building absolute trust and cultivating long-term corporate relationships with international buyers from the very first order.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become a globally recognized and trusted leader in the import-export industry, known for bridging global market demands with sustainable, eco-friendly practices. We aim to set the benchmark for operational excellence, where every international transaction transforms into an enduring, lifelong business partnership.",
              },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 150}>
                <div className="h-full rounded-[28px] border border-white/15 bg-white/10 p-8 shadow-elegant backdrop-blur-md sm:p-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                    <m.icon className="h-6 w-6 text-[#F5D76E]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold [font-family:'Playfair_Display',serif]">{m.title}</h3>
                  <div className="mt-4 h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
                  <p className="mt-5 text-[0.98rem] leading-[1.9] text-white/85">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Evolving Market Demands */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[28px] shadow-elegant">
            <img
              src={exportMeeting}
              alt="International business partners reviewing global supply chain plans"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#17884B]/35 via-transparent to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={140} className="order-1 lg:order-2">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Meeting Evolving Market Demands
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
            Architected for fluid adaptability.
          </h2>
          <div className="mt-5 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
          <p className="mt-7 text-[1.02rem] leading-[1.9] text-muted-foreground">
            In a rapidly fluctuating global economy, static inventories fall short. Beyond our core
            specializations, our trading infrastructure is architected for fluid adaptability. We
            actively monitor global market intelligence to provide agile, demand-driven sourcing and
            services, ensuring our international partners always maintain a distinct competitive
            edge. At JAKKI EXIM, we don't just clear transactions—we build global futures together,
            starting from day one.
          </p>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-card via-card to-background p-10 text-center shadow-elegant sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Partner with JAKKI EXIM
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A2540] [font-family:'Playfair_Display',serif] sm:text-4xl lg:text-[2.75rem]">
              Ready to Build Long-Term Global Partnerships?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.9] text-muted-foreground">
              From your very first order, our objective is a deep, enduring, and mutually beneficial
              relationship built on certified quality, transparent communication, and dependable
              global logistics.
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