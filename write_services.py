from pathlib import Path

content = '''import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";

const coreOfferings = [
  "End-to-End Documentation",
  "Customs Clearance & Compliance",
  "Freight & Logistics Synchronization",
  "Supplier & Stakeholder Alignment",
];

const qualityOfferings = [
  "Third-Party Lab Reporting",
  "Customized Packaging & Labelling",
  "Batch-by-Batch Product Testing",
  "Quality Certification Management",
];

const workflowSteps = [
  "Corporate Consultation & Alignment",
  "Managed Sourcing & Value-Add Processing",
  "Batch-by-Batch Testing & Certification",
  "Customs Clearance & Freight Synchronization",
  "Seamless Doorstep Delivery & Relationship Continuity",
];

export default function Services() {
  return (
    <SiteLayout>
      <section className="border-b border-[#E8EEF5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-[700] uppercase tracking-[0.28em] text-[#D4AF37]">Our Services</p>
            <h1 className="mt-4 text-[2.8rem] font-[700] leading-[1.08] tracking-[0.02em] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif] sm:text-[3.6rem] lg:text-[4.4rem]">
              Our Services
            </h1>
            <p className="mt-5 text-[1.15rem] font-[600] uppercase tracking-[0.2em] text-[#1E8E4A] sm:text-[1.2rem]">
              End-to-End Export & Import Management
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#E8EEF5] bg-white p-8 shadow-[0_20px_45px_rgba(10,42,82,0.08)] sm:p-12 lg:p-16">
          <p className="text-[1.02rem] leading-[1.9] text-[#324A5F]">
            At JAKKI EXIM, we look beyond individual transactions to build permanent, dependable global supply chains. We understand that successful international trade relies on the seamless synchronization of multiple stakeholders, including suppliers, customs authorities, freight forwarders, and regulatory bodies.
          </p>
          <p className="mt-6 text-[1.02rem] leading-[1.9] text-[#324A5F]">
            Our core service is the total orchestration of this complex ecosystem. By managing every moving part with corporate precision, we mitigate risk, eliminate logistical friction, and ensure your business experiences a seamless, reliable trade process from the very first order.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-[2px] flex-1 bg-[linear-gradient(90deg,#D4AF37_0%,rgba(212,175,55,0))]" />
          <h2 className="text-[1.8rem] font-[700] tracking-[0.02em] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif] sm:text-[2.2rem]">
            Core Service Offerings
          </h2>
          <div className="h-[2px] flex-1 bg-[linear-gradient(90deg,rgba(212,175,55,0),#D4AF37)]" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[#E8EEF5] bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FBFF_100%)] p-8 shadow-[0_16px_35px_rgba(10,42,82,0.06)]">
            <h3 className="text-[1.55rem] font-[700] leading-[1.2] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif]">
              Comprehensive Logistics & Stakeholder Coordination
            </h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {coreOfferings.map((item) => (
                <div key={item} className="rounded-2xl border border-[#E8EEF5] bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF5EE] text-[#1E8E4A]">
                      <FileCheck2 className="h-5 w-5" />
                    </div>
                    <p className="text-[0.95rem] font-[600] leading-[1.5] text-[#0A2A52]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#E8EEF5] bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FBFF_100%)] p-8 shadow-[0_16px_35px_rgba(10,42,82,0.06)]">
            <h3 className="text-[1.55rem] font-[700] leading-[1.2] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif]">
              Rigorous Quality Assurance & Compliance Services
            </h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {qualityOfferings.map((item) => (
                <div key={item} className="rounded-2xl border border-[#E8EEF5] bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F1DB] text-[#D4AF37]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="text-[0.95rem] font-[600] leading-[1.5] text-[#0A2A52]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#E8EEF5] bg-[#F8FBFF] p-8 shadow-[0_16px_35px_rgba(10,42,82,0.05)] sm:p-10 lg:p-12">
          <div className="flex items-center justify-center">
            <div className="rounded-full border border-[#D4AF37]/35 bg-white px-5 py-2 text-[11px] font-[700] uppercase tracking-[0.28em] text-[#D4AF37]">
              Workflow
            </div>
          </div>
          <h2 className="mt-6 text-center text-[1.95rem] font-[700] tracking-[0.02em] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif] sm:text-[2.35rem]">
            Step-by-Step Workflow: From First Inquiry to Doorstep Delivery
          </h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full border border-[#D4AF37]/30 bg-white px-4 py-3 text-center text-[0.92rem] font-[600] text-[#0A2A52] shadow-sm">
            <span className="text-[#1E8E4A]">Phase 1: Consultation</span>
            <span className="text-[#6C7A8B]">-&gt;</span>
            <span className="text-[#1E8E4A]">Phase 2: Sourcing & Processing</span>
            <span className="text-[#6C7A8B]">-&gt;</span>
            <span className="text-[#1E8E4A]">Phase 3: Batch Testing</span>
            <span className="text-[#6C7A8B]">-&gt;</span>
            <span className="text-[#1E8E4A]">Phase 4: Customs & Freight</span>
            <span className="text-[#6C7A8B]">-&gt;</span>
            <span className="text-[#1E8E4A]">Phase 5: Delivery</span>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div key={step} className="rounded-[20px] border border-[#E8EEF5] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2A52] text-[0.98rem] font-[700] text-white">
                    {index + 1}
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <h3 className="mt-5 text-[1.05rem] font-[700] leading-[1.35] text-[#0A2A52]">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#DDE7EE] bg-[linear-gradient(135deg,#F5F8FA_0%,#EEF6EE_100%)] p-8 shadow-[0_16px_35px_rgba(10,42,82,0.05)] sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2A52] text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-[1.9rem] font-[700] tracking-[0.02em] text-[#0A2A52] [font-family:'Cormorant_Garamond',serif] sm:text-[2.2rem]">
              Privacy, Security & Compliance Assurance
            </h2>
          </div>
          <p className="mt-6 text-[1.02rem] leading-[1.9] text-[#324A5F]">
            We maintain rigorous standards of confidentiality, security, and regulatory compliance across every stage of the service lifecycle, ensuring dependable handling of sensitive commercial information.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
'''

Path("src/pages/Services.tsx").write_text(content, encoding="utf-8")
