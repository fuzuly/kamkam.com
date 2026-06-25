import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import dynamic from "next/dynamic";

// Below-the-fold components: lazily loaded for faster initial paint
const TripleMockup = dynamic(() => import("@/components/TripleMockup"), { ssr: true });
const BusinessSection = dynamic(() => import("@/components/BusinessSection"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Keşfet - Giriş Bölümü */}
      <Hero />

      {/* Keşfet - Uygulama Arayüzü Sergileme */}
      <Showcase />

      {/* THREE MOCKUPS FEATURE SECTION */}
      <TripleMockup />

      {/* B2B BUSINESS SECTION */}
      <BusinessSection />

      {/* STICKY SCROLL SECTION: NASIL ÇALIŞIR */}
      <HowItWorks />

      {/* AWWWARDS-WINNING FOOTER */}
      <div className="relative z-0">
        <Footer />
      </div>
    </main>
  );
}
