"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import KesfetHero from "@/components/KesfetHero";
import KesfetSlider from "@/components/KesfetSlider";
import KesfetCards from "@/components/KesfetCards";
import DownloadModal from "@/components/DownloadModal";

export interface KesfetFilters {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  activeSort: string;
  setActiveSort: (s: string) => void;
  openDownload: (placeName: string) => void;
  activePrices: string[];
  setActivePrices: (p: string[]) => void;
  activeDistance: string;
  setActiveDistance: (d: string) => void;
  openNow: boolean;
  setOpenNow: (v: boolean) => void;
  hasPromo: boolean;
  setHasPromo: (v: boolean) => void;
  isMapView: boolean;
  setIsMapView: (v: boolean) => void;
}

export default function KesfetPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeSort, setActiveSort] = useState("Önerilen");
  const [activePrices, setActivePrices] = useState<string[]>([]);
  const [activeDistance, setActiveDistance] = useState("Farketmez");
  const [openNow, setOpenNow] = useState(false);
  const [hasPromo, setHasPromo] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadPlaceName, setDownloadPlaceName] = useState("");

  // Fix: Force scroll to top on mount when navigating from another page
  // This prevents Lenis/Next.js scroll restoration from keeping the user at the bottom (footer)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // If Lenis is active, sometimes we need a small delay
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 50);
  }, []);

  const openDownload = (placeName: string) => {
    setDownloadPlaceName(placeName);
    setIsDownloadOpen(true);
  };

  const filters: KesfetFilters = {
    searchQuery, setSearchQuery,
    activeCategory, setActiveCategory,
    activeSort, setActiveSort,
    openDownload,
    activePrices, setActivePrices,
    activeDistance, setActiveDistance,
    openNow, setOpenNow,
    hasPromo, setHasPromo,
    isMapView: false, setIsMapView: () => {}
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <KesfetHero filters={filters} />
        <KesfetSlider onCardClick={openDownload} />
        <KesfetCards filters={filters} />
      </div>
      <DownloadModal 
        isOpen={isDownloadOpen} 
        onClose={() => setIsDownloadOpen(false)} 
        placeName={downloadPlaceName} 
      />
      <div className="relative z-0 mt-auto">
        <Footer />
      </div>
    </main>
  );
}
