import { SiteLayout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Globe, Send, MessageCircle, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  contactEmail,
  operationsOffice,
  primaryContact,
  registeredOffice,
  secondaryContact,
  whatsappUrl,
} from "@/lib/contact";



export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-vibrant py-16 text-white sm:py-20">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Let's start exporting.</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Share your requirement and we'll respond within 24 hours with samples, certifications
            and best pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-6 lg:col-span-2">
          {[
            { icon: Mail, label: "Email", value: contactEmail },
            { icon: Phone, label: "Primary Contact", value: primaryContact },
            { icon: Phone, label: "Secondary Contact", value: secondaryContact },
            { icon: MessageCircle, label: "WhatsApp", value: primaryContact },
            { icon: MapPin, label: "Registered Office", value: registeredOffice.join("\n") },
            { icon: MapPin, label: "Operations Office", value: operationsOffice.join("\n") },
            { icon: Globe, label: "Website", value: "www.jakkiexim.com" },
          ].map((c) => (
            <div key={c.label} className={`flex ${c.label.includes("Office") ? "gap-3 p-4" : "gap-4 p-6"} rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-glow`}>
              <div className={`inline-flex ${c.label.includes("Office") ? "h-11 w-11" : "h-12 w-12"} shrink-0 items-center justify-center rounded-xl bg-gradient-vibrant text-white shadow-glow`}>
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className={`${c.label.includes("Office") ? "mt-0.5 leading-snug" : "mt-1"} whitespace-pre-line font-medium text-foreground`}>{c.value}</div>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#15803D] px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-[#0B1F3A]">
              <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
            </a>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-[#15803D]">
              <Mail className="h-4 w-4" /> Email Inquiry
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Follow Us</div>
            <div className="mt-4 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition hover:bg-primary hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10"
          >
            <h2 className="text-3xl font-extrabold text-foreground">Request a Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We reply within one business day.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
                <div className="text-xl font-bold text-accent">Thank you!</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your enquiry has been received. Our export team will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Contact Number" name="phone" type="tel" required />
                <Field label="Country" name="country" required />
                <Field label="Destination Port" name="port" />
                <Field label="Product Interest" name="product" />
                <Field label="Quantity" name="qty" placeholder="e.g. 5,000 kg" />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Container Size</label>
                  <select name="container" defaultValue="" className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2">
                    <option value="" disabled>Select Container Size</option>
                    <option>20ft FCL</option>
                    <option>40ft FCL</option>
                    <option>40ft HC</option>
                    <option>LCL</option>
                    <option>Air Freight</option>
                    <option>Sample</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Incoterm</label>
                  <select name="incoterm" defaultValue="" className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2">
                    <option value="" disabled>Select Incoterm</option><option>FOB</option><option>CIF</option><option>CFR</option><option>DDP</option><option>EXW</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full btn-gradient px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:brightness-110"
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {required ? (
          <>
            {label} <span className="required-star font-bold text-[#14532D]">*</span>
          </>
        ) : label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2"
      />
    </div>
  );
}