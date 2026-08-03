import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Plane, Clock, Instagram, Facebook, Linkedin, Youtube, Send, MessageCircle } from "lucide-react";
import logoMark from "@/assets/jakki-exim-mark-3d.png";
import { categories } from "@/lib/products";
import { contactEmail, primaryContact, secondaryContact, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.32_0.11_148)] text-white">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1 md:pr-8 lg:pr-10">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-white/95 p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
              <img
                src={logoMark}
                alt="JAKKI EXIM logo"
                decoding="async"
                style={{ objectFit: "contain", backgroundColor: "transparent" }}
                className="block h-[32px] w-auto max-w-none shrink-0 border-0 bg-transparent object-contain shadow-none [clip-path:none] [filter:none] sm:h-[38px] lg:h-[44px]"
              />
            </span>
            <span className="flex min-w-0 flex-col justify-center leading-none">
              <span
                style={{ fontFamily: '"Cinzel", ui-serif, Georgia, serif' }}
                className="whitespace-nowrap text-[17px] font-bold tracking-[0.06em] text-white sm:text-[21px] lg:text-[24px]"
              >
                <span className="text-white md:text-[#D4AF37]">JAKKI</span>{' '}
                <span style={{ color: "#1E8E3E" }}>EX</span>
                <span className="text-white md:text-[#D4AF37]">IM</span>
              </span>
              <span className="mt-[3px] whitespace-normal text-[8px] md:text-[12px] leading-[1.25] font-medium tracking-[0.12em] text-white/70 sm:text-[9.5px] lg:text-[13px] lg:leading-[1.3] md:max-w-[220px]">
                Local Quality to Global Standards
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            A trusted Indian export &amp; import partner connecting farm, factory, and craft to global
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
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact Us" },
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
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" /> Office Address: 301, 3rd Floor, Venkata Giri Nagar, Vivekananda Nagar, Kukatpally, Hyderabad - 500072, Telangana, India</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-brand-gold" /> {contactEmail}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-brand-gold" /> {primaryContact}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-brand-gold" /> {secondaryContact}</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 shrink-0 text-brand-gold" /> <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li className="flex items-center gap-2"><Plane className="h-4 w-4 shrink-0 text-brand-gold" /> Exporting to 30+ Countries</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-brand-gold" /> Quotes within 24 Hours</li>
          </ul>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-xs font-semibold text-white shadow-glow hover:brightness-110">
            <Send className="h-3.5 w-3.5" /> Request a Quote
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-[13px] font-[500] tracking-[0.4px] text-[rgba(255,255,255,0.88)] sm:flex-row sm:px-6 lg:px-8" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
          <span className="font-[inherit]">© {new Date().getFullYear()} JAKKI EXIM. All Rights Reserved.</span>
          <span className="font-[inherit]">Designed for International Trade • Made in India</span>
        </div>
      </div>
    </footer>
  );
}
