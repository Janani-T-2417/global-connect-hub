import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JAKKI EXIM — Request Export Quote & Samples" },
      {
        name: "description",
        content:
          "Get in touch with JAKKI EXIM for export quotations, product samples and partnership opportunities. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact JAKKI EXIM" },
      { property: "og:description", content: "Request a quote — response within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Let's start exporting.</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Share your requirement and we'll respond within 24 hours with samples, certifications
            and best pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-6 lg:col-span-2">
          {[
            { icon: Mail, label: "Email", value: "info@jakkiexim.com" },
            { icon: Phone, label: "Phone / WhatsApp", value: "+91 00000 00000" },
            { icon: MapPin, label: "Office", value: "India — Exporting Worldwide" },
            { icon: Globe, label: "Website", value: "www.jakkiexim.com" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-medium text-foreground">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-foreground">Request a Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We reply within one business day.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 p-6 text-center">
                <div className="text-lg font-semibold text-accent">Thank you!</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your enquiry has been received. Our export team will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name *" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email *" name="email" type="email" required />
                <Field label="Country *" name="country" required />
                <Field label="Product Interest" name="product" className="sm:col-span-2" />
                <Field label="Quantity / Container Size" name="qty" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Send Enquiry <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2"
      />
    </div>
  );
}