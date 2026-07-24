import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Plane, Clock, Instagram, Facebook, Linkedin, Youtube, Send } from "lucide-react";
import logoIcon from "@/assets/jakki-exim-icon.png";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.32_0.11_148)] text-white">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
            <img src={logoIcon} alt="JAKKI EXIM" className="h-20 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-['Cinzel'] text-2xl font-bold tracking-[0.04em] text-[#0A1D3A]">
                JAKKI <span className="text-[#15803D]">EXIM</span>
              </div>
              <div className="mt-1 font-['Cinzel'] text-[11px] font-semibold tracking-[0.08em] text-foreground/70">
                Local Quality to Global Standards
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            A trusted Indian exportΓÇôimport partner connecting farm, factory, and craft to global
            markets with quality, compliance, and care.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                 className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-brand-gold-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Company</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "All Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Top Categories
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products/${c.slug}`}
                  className="text-white/75 transition hover:text-white"
                >
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Get In Touch</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" /> India ┬╖ Exporting Worldwide</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-brand-gold" /> info@jakkiexim.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-brand-gold" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Plane className="h-4 w-4 shrink-0 text-brand-gold" /> Exporting to 30+ Countries</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-brand-gold" /> Quotes within 24 Hours</li>
          </ul>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-xs font-semibold text-white shadow-glow hover:brightness-110">
            <Send className="h-3.5 w-3.5" /> Request a Quote
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <span>┬⌐ {new Date().getFullYear()} JAKKI EXIM. All rights reserved.</span>
          <span>Designed for international trade ┬╖ Made in India</span>
        </div>
      </div>
    </footer>
  );
}
