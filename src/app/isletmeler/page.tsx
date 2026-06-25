"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import IsletmeHero from "@/components/isletmeler/IsletmeHero";
import IsletmePitch from "@/components/isletmeler/IsletmePitch";

// Below-the-fold components: lazily loaded
const IsletmeQuestions = dynamic(() => import("@/components/isletmeler/IsletmeQuestions"), { ssr: true });
const IsletmeBentoGrid = dynamic(() => import("@/components/isletmeler/IsletmeBentoGrid"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function IsletmelerPage() {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 50);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-black overflow-hidden relative">
      <div className="flex-grow">
        {/* SECTION 1: Black Theme Hero */}
        <IsletmeHero />

        {/* SECTION 2: White Theme Pitch */}
        <IsletmePitch />

        {/* SECTION 3: Reverse Psychology Questions */}
        <IsletmeQuestions />

        {/* SECTION 4: The New Rules & Bento Grid */}
        <IsletmeBentoGrid />
      </div>
      
      {/* Footer is on white background, so we must wrap it or ensure the last section leads smoothly into it */}
      <div className="bg-white">
        <Footer />
      </div>
    </main>
  );
}
