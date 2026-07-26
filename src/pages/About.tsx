import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Globe2, ShieldCheck, Handshake, Leaf, Award, TrendingUp } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={hero2} alt="" className="absolute inset-0 -z-10 h-full w-full scale-110 animate-ken object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="inline-flex w-fit max-w-[720px] items-start justify-start px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="h-auto w-[720px] min-w-[720px] max-w-[720px] flex-none rounded-[18px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.90),rgba(245,249,255,0.82))] p-[32px_40px] shadow-[0_18px_45px_rgba(10,25,49,0.14)] backdrop-blur-[18px] [background-image:linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0)_35%)] [filter:drop-shadow(0_10px_35px_rgba(30,58,138,0.08))] animate-[fadeUp_0.8s_ease-out]">
            <div className="absolute right-5 top-5 h-14 w-14 rounded-tr-[20px] border-t border-r border-white/40" />
            <div className="absolute left-0 top-0 h-20 w-[2px] rounded-full bg-[linear-gradient(180deg,#D4AF37_0%,#F5D76E_100%)]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(90deg,#D4AF37_0%,#E6C85C_100%)] px-4 py-1.5 text-[11px] font-[700] uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/90" />
              About JAKKI EXIM
            </span>
            <h1 className="mt-5 text-[2.55rem] font-[700] leading-[1.1] tracking-[0.02em] text-[#0A2540] [font-family:'Cormorant_Garamond',serif] sm:text-[3.2rem] lg:text-[4rem]">
              About <span className="text-[#17884B]">JAKKI EXIM</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,#D4AF37_0%,#F5D76E_100%)]" />
            <p className="mt-5 text-[0.95rem] font-[700] uppercase tracking-[0.2em] text-[#173B63] sm:text-[1rem]">
              GLOBAL TRADE BUILT ON PRECISION, QUALITY & LASTING ALLIANCES
            </p>
            <p className="mt-4 max-w-[640px] text-[1.02rem] font-[500] leading-[1.9] text-[#324A5F] sm:text-[1.1rem]">
              JAKKI EXIM is a knowledge-driven import-export company connecting premium regional sourcing with global markets through certified quality, sustainable practices, and long-term business partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Who We Are</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">International trade built on lasting relationships.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At JAKKI EXIM, we believe international trade is more than moving products across borders—it is about creating lasting business relationships.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            With deep industry expertise and an agile supply chain, we deliver export-ready products that consistently meet international quality standards. Our goal is to provide dependable sourcing solutions while building long-term partnerships from the very first shipment.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:brightness-110">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={hero3} alt="Indian farms" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gradient-sky py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">What Makes Us Different</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">A premium sourcing partner for global markets.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Globe2, title: "Strategic Sourcing", desc: "Source premium raw materials from verified and ethical suppliers." },
              { icon: TrendingUp, title: "Advanced Processing", desc: "Transform carefully selected raw materials into premium value-added products." },
              { icon: ShieldCheck, title: "Batch-by-Batch Testing", desc: "Every batch undergoes rigorous testing and verification before shipment to ensure consistent quality and compliance." },
              { icon: Award, title: "Certified Quality", desc: "Products meet recognized international quality certifications and global trade standards." },
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

      {/* Corporate Philosophy */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Corporate Philosophy</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">The principles that guide every shipment.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Uncompromised Quality", desc: "Rigorous quality control, certification, and batch testing ensure every product consistently meets global standards." },
            { icon: Handshake, title: "Enduring Trust", desc: "Transparent communication, ethical business practices, and dependable logistics build confidence with every shipment." },
            { icon: Leaf, title: "Long-Term Relationships", desc: "We focus on building stable, collaborative partnerships that create mutual growth and lasting success." },
            { icon: Globe2, title: "Eco-Friendly Practices", desc: "Our sourcing and processing methods emphasize environmentally responsible practices and sustainable product solutions." },
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

      {/* Mission & Vision */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-elegant backdrop-blur">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-white/80">
              Deliver exceptional value-added products through rigorous testing, certified quality, and seamless export solutions while building trusted, long-term relationships with international buyers.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-elegant backdrop-blur">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-white/80">
              Become a globally recognized import-export company known for operational excellence, sustainable business practices, and lifelong partnerships across international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Global Market Demands */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Adapting to Evolving Global Markets</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Global markets evolve, and so do we.</h2>
        </div>
        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          <p className="leading-relaxed text-muted-foreground">
            Beyond our core product categories, JAKKI EXIM continuously monitors international market trends to deliver agile, demand-driven sourcing solutions. Our flexible trading infrastructure enables us to respond quickly to changing buyer requirements, helping our partners remain competitive in global markets.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We don't simply facilitate international trade—we create lasting value and build global futures together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-border bg-gradient-to-br from-card via-card to-background p-10 text-center shadow-elegant sm:p-14">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Partner with JAKKI EXIM</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Reliable sourcing, certified quality, and long-term value.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you're looking for premium export products, dependable sourcing, or a long-term global trade partner, JAKKI EXIM is committed to delivering quality, transparency, and excellence in every shipment.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:brightness-110">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}