import { marqueeImages } from "@/lib/productImages";

type Props = { theme: string; title?: string; count?: number; reverse?: boolean };

export function ImageMarquee({ theme, title, count = 10, reverse = false }: Props) {
  const imgs = marqueeImages(theme, count, 500, 340);
  const strip = [...imgs, ...imgs]; // duplicate for seamless loop
  return (
    <div className="relative">
      {title && (
        <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            {title}
          </h3>
        </div>
      )}
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div
          className="marquee-track flex w-max gap-5"
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {strip.map((src, i) => (
            <div
              key={i}
              className="h-52 w-72 shrink-0 overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}