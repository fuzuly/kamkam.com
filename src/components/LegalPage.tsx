"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

interface LegalSection {
  title: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Hero */}
      <section className="bg-[#050505] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-10 group"
          >
            <IconArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Ana Sayfa
          </Link>
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-xs font-semibold text-brand tracking-widest uppercase">Kurumsal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/50 font-medium mb-6">{subtitle}</p>
          <p className="text-xs text-white/30 tracking-widest uppercase font-semibold">
            Son güncelleme: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-grow max-w-4xl mx-auto w-full px-6 py-20">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-xs font-bold text-brand mt-0.5">
                  {i + 1}
                </span>
                <h2 className="text-xl font-bold text-foreground tracking-tight">{section.title}</h2>
              </div>
              <div className="ml-12">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted leading-relaxed">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand/50 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted leading-relaxed">{section.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 p-8 rounded-2xl bg-[#050505] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand/10 blur-3xl rounded-full pointer-events-none" />
          <h3 className="text-lg font-bold mb-2 relative z-10">İletişim</h3>
          <p className="text-white/50 text-sm leading-relaxed relative z-10">
            Sorularınız için{" "}
            <a href="mailto:info@kamkamapp.com" className="text-brand hover:underline">
              info@kamkamapp.com
            </a>{" "}
            adresine ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
