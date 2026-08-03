import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logoMark from "@/assets/jakki-exim-mark-3d.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-border bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:h-[86px] lg:px-8 overflow-visible">
        <Link to="/" className="group flex min-w-0 shrink-0 items-center gap-4 overflow-visible sm:gap-5">
          <img
            src={logoMark}
            alt="JAKKI EXIM logo"
            decoding="async"
            fetchPriority="high"
            style={{ objectFit: "contain", backgroundColor: "transparent" }}
            className="block h-[36px] w-auto max-w-none shrink-0 border-0 bg-transparent object-contain shadow-none [clip-path:none] [filter:none] sm:h-[44px] lg:h-[52px]"
          />
          <span className="flex min-w-0 flex-col justify-center leading-none">
            <span
              style={{ fontFamily: '"Cinzel", ui-serif, Georgia, serif' }}
              className="whitespace-nowrap text-[17px] font-bold tracking-[0.06em] sm:text-[21px] lg:text-[24px]"
            >
              <span style={{ color: "#0A2E5C" }}>JAKKI</span>{" "}
              <span style={{ color: "#1E8E3E" }}>EX</span>
              <span style={{ color: "#0A2E5C" }}>IM</span>
            </span>
            <span className="mt-[3px] whitespace-nowrap text-[8px] font-medium tracking-[0.12em] text-muted-foreground sm:text-[9.5px] lg:text-[10.5px]">
              Local Quality to Global Standards
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className="relative font-heading text-[15px] font-medium tracking-[0.01em] text-foreground/80 transition-colors duration-200 hover:text-primary [&.active]:text-primary [&.active]:after:absolute [&.active]:after:-bottom-2 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:rounded-full [&.active]:after:bg-gradient-vibrant"
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full btn-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Request Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-foreground transition active:scale-95 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="animate-slide-fade border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary [&.active]:bg-secondary [&.active]:text-primary"
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full btn-gradient px-4 py-2.5 text-sm font-semibold text-white"
            >
              Request Quote
            </Link>
            <div className="mt-2.5 flex items-center justify-center gap-4 border-t border-border pt-2.5">
              <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-muted-foreground hover:text-primary"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
