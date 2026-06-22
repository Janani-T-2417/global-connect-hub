import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/jakki-exim-logo.jpg";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JAKKI EXIM" width={48} height={48} className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="text-base font-bold text-primary">JAKKI EXIM</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                A Local to Global Company
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A trusted Indian export–import partner connecting farm, factory, and craft to global
            markets with quality, compliance, and care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "All Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Top Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products/${c.slug}`}
                  className="text-muted-foreground transition hover:text-primary"
                >
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> India · Exporting Worldwide</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@jakkiexim.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> www.jakkiexim.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} JAKKI EXIM. All rights reserved.</span>
          <span>Designed for international trade · Made in India</span>
        </div>
      </div>
    </footer>
  );
}