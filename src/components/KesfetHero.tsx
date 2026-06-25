"use client";

import { useState } from "react";
import { m as motion } from "framer-motion";
import { Filter, Search, Map as MapIcon, Grid } from "lucide-react";
import Logo from "@/components/Logo";
import Image from "next/image";

import { CATEGORIES } from "@/data/demo-isletmeler";
import { KesfetFilters } from "@/app/kesfet/page";

import FilterModal from "./FilterModal";

export default function KesfetHero({ filters }: { filters: KesfetFilters }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="relative w-full flex items-center bg-white overflow-hidden pt-32 pb-0 sm:pt-40 sm:pb-2">
      
      {/* APPLE-STYLE PRISTINE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] opacity-80" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.015]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <filter id="noiseFilterKesfet"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterKesfet)" />
          </svg>
        </div>
      </div>

      {/* RIGHT: 14.SVG - DESKTOP (NO BLEED, TOP-0 FLUSH) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute top-0 right-0 w-[45%] lg:w-[40%] xl:w-[35%] max-w-[600px] z-0 pointer-events-none"
      >
        <Image 
          src="/14.svg" 
          alt="KamKam Keşfet Arayüzü" 
          width={600}
          height={1300}
          priority
          className="w-full h-auto object-contain object-top object-right drop-shadow-xl"
        />
      </motion.div>

      {/* RIGHT: 14.SVG - MOBILE (BLEEDING 25%, TOP-24 BELOW HEADER) */}
      <motion.div 
        initial={{ opacity: 0, x: "50%" }}
        animate={{ opacity: 1, x: "25%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="block md:hidden absolute top-24 right-0 w-[55%] sm:w-[50%] z-0 pointer-events-none"
      >
        <Image 
          src="/14.svg" 
          alt="KamKam Keşfet Arayüzü" 
          width={600}
          height={1300}
          priority
          className="w-full h-auto object-contain object-top object-right drop-shadow-xl"
        />
      </motion.div>

      {/* APPLE-STYLE PRISTINE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top ambient glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(237,27,36,0.03)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center min-h-[50vh] sm:min-h-0 sm:h-auto px-4">
        
        {/* HERO CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:w-[65%] lg:w-[55%] xl:max-w-2xl flex flex-col items-start text-left mb-6 sm:mb-20 lg:mb-32"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-[75%] sm:max-w-none text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#050505] tracking-tighter leading-[1.1] mb-6 md:mb-8"
          >
            Şehri Kendi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-rose-500 to-orange-500">
              Kurallarınla
            </span> <br />
            Keşfet
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-12 max-w-[220px] sm:max-w-none"
          >
            KamKam’lıların şu an nerede, hangi ayrıcalıkları yaşadığını gör. Senin için özenle seçilmiş mekanların güncel fırsatlarına göz at.
          </motion.p>
        </motion.div>

        {/* FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-[100vw] -ml-4 sm:w-full sm:ml-0 relative overflow-hidden self-start"
        >
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-2.5 overflow-x-auto py-3 pr-4 sm:pr-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* STICKY FILTER ICON BUTTON */}
            <div className="sticky left-0 z-20 flex items-center bg-white pl-4 sm:pl-0 pr-2 py-1">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-white border border-[#E3E7EC] rounded-full hover:border-[#D9381E]/30 hover:shadow-[0_4px_12px_rgb(217,56,30,0.08)] transition-all duration-300"
              >
                <Filter className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#37474F] group-hover:text-brand transition-colors" />
                
                {/* Active Filter Indicator Dot */}
                {(filters.activePrices.length > 0 || filters.openNow || filters.hasPromo || filters.activeDistance !== "Farketmez" || filters.activeSort !== "Önerilen") && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-brand border-2 border-white rounded-full" />
                )}
              </button>
            </div>

            {/* DIVIDER */}
            <div className="w-[1px] h-6 bg-[#E3E7EC] mx-1 sm:mx-2 flex-shrink-0" />

            {/* CATEGORY BUTTONS */}
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                onClick={() => filters.setActiveCategory(category)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300 ${
                  filters.activeCategory === category 
                  ? "bg-gray-900 text-white shadow-md" 
                  : "bg-white border border-[#E3E7EC] text-[#37474F] hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
            
            {/* SPACING AT THE END SO LAST ITEM DOESN'T HUG SCREEN EDGE */}
            <div className="w-4 sm:w-0 flex-shrink-0" />
          </div>
        </motion.div>
      </div>

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        filters={filters}
      />
    </section>
  );
}
