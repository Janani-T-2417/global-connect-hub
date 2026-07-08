import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2 } from "lucide-react";
import { heroSlides } from "@/lib/productImages";

const SLIDES = heroSlides(1920, 1080);

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative isolate min-h-[92vh] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 -z-20">
        {SLIDES.map((s, idx) => (
          <img
            key={s.key}
            src={s.url}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${idx === i ? "opacity-100 animate-slow-zoom" : "opacity-0"}`}
          />
        ))}
      </div>
      {/* Light gradient overlay (no dark navy) */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue animate-fade-up">
            <Globe2 className="h-3.5 w-3.5" /> Exporting from India · to 30+ countries
          </div>
          <h1
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            A Local Promise.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              A Global Standard.
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            JAKKI EXIM connects India's finest farms, factories and artisans to international
            buyers — eco-friendly packaging, agro commodities, cold-pressed oils, superfood
            powders and handcrafted goods, delivered with uncompromising quality.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>

          {/* Slide dots */}
          <div className="mt-14 flex items-center gap-3">
            {SLIDES.map((s, idx) => (
              <button
                key={s.key}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-4 bg-foreground/25 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}