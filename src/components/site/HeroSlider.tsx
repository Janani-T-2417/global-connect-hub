import { useEffect, useState } from "react";

interface HeroSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export function HeroSlider({ images, interval = 5500, className = "" }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full scale-110 animate-ken object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>
  );
}