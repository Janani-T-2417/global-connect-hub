import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logoIcon from "@/assets/jakki-exim-icon.png";

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
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={logoIcon}
            alt="JAKKI EXIM icon"
            width={940}
            height={520}
            decoding="async"
            fetchPriority="high"
            className="h-[68px] w-auto shrink-0 object-contain"
          />
          <div className="flex min-w-0 translate-y-1 flex-col items-center justify-center leading-none">
            <span className="text-center font-['Cinzel'] text-[22px] font-bold tracking-[0.3px] text-[#1E4366] sm:text-[25px] lg:text-[29px]">
              JAKKI <span className="text-[#2F8A3B]">EX</span><span className="text-[#1E4366]">IM</span>
            </span>
            <span className="mt-2 origin-center scale-x-[0.68] whitespace-nowrap text-center font-['Cinzel'] text-[12px] font-bold leading-[1.2] tracking-[2px] text-[#1F1F1F] [font-variant-caps:small-caps] [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
              Local Quality to Global Standards
            </span>
          </div>
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
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary [&.active]:text-primary"
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full btn-gradient px-4 py-3 text-sm font-semibold text-white"
            >
              Request Quote
            </Link>
            <div className="mt-3 flex items-center justify-center gap-4 border-t border-border pt-3">
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
