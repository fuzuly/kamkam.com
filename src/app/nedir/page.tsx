"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import NedirHero from "@/components/nedir/NedirHero";

// Below-the-fold components: lazily loaded
const NedirFAQ = dynamic(() => import("@/components/nedir/NedirFAQ"), { ssr: true });
const NedirExplanation = dynamic(() => import("@/components/nedir/NedirExplanation"), { ssr: true });
const NedirCompany = dynamic(() => import("@/components/nedir/NedirCompany"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function NedirPage() {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 50);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <div className="flex-grow">
        
        {/* SECTION 1: White Apple Quality Theme Hero */}
        <NedirHero />

        {/* SECTION 2: Black Theme - KamKam Akademi FAQ */}
        <NedirFAQ />

        {/* SECTION 3: White Theme - Nedir? Split Explanation */}
        <NedirExplanation />

        {/* SECTION 4: White Theme - Company Intro & Manifesto */}
        <NedirCompany />
        
      </div>
      
      {/* Footer is on white background natively, matches the end of NedirCompany smoothly */}
      <div className="bg-white">
        <Footer />
      </div>
    </main>
  );
}
