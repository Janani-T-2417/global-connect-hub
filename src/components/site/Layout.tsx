import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollTopOnRoute />
      <Navbar />
      <main className="flex-1 animate-fade-in">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}