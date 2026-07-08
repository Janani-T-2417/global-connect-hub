import { Link } from "react-router-dom";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { CONTACT, getProductImage, type Product } from "@/lib/products";

function whatsappHref(p: Product) {
  const num = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  const msg = encodeURIComponent(
    `Hello JAKKI EXIM, I'd like a quote for: ${p.name} (HS ${p.hs6}). Please share pricing, MOQ and lead time.`,
  );
  return `https://wa.me/${num}?text=${msg}`;
}

export function ProductCard({ p }: { p: Product }) {
  const img = getProductImage(p.slug, 600, 600);
  const detail = `/products/${p.categorySlug}/${p.slug}`;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant">
      <Link to={detail} className="relative block aspect-square overflow-hidden bg-secondary">
        <img
          src={img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue backdrop-blur">
          HS {p.hs6}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link to={detail}>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition group-hover:text-primary">
            {p.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {p.tagline}
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            to="/contact"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <Mail className="h-3.5 w-3.5" />
            Inquiry
          </Link>
          <a
            href={whatsappHref(p)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#25D366] bg-[#25D366]/10 px-3 py-2 text-xs font-semibold text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
        <Link
          to={detail}
          className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue hover:gap-2 transition-all"
        >
          View details <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}