import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1F3A] text-white shadow-elegant transition hover:scale-110 hover:bg-[#15803D]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#15803D] text-white shadow-glow transition hover:scale-110 hover:bg-[#0B1F3A]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#15803D] opacity-40" />
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}