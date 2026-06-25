"use client";

import { useState } from "react";
import { m as motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

const CATEGORIES = [
  "Tümü",
  "Lezzet Dünyası",
  "Güzellik",
  "Sağlık",
  "Bakım",
  "Pet Hizmetleri",
  "Araba",
  "Araç Bakım",
  "Sanayi"
];

export default function KesfetPlaces() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  return (
    <section className="w-full bg-white py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FILTER BAR HEADER */}
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#050505] tracking-tight">
            Keşfet
          </h2>
          <span className="text-gray-400 font-medium mt-1">245 Mekan</span>
        </div>

        {/* HORIZONTAL SCROLLING FILTER BAR */}
        <div className="relative w-full overflow-hidden">
          {/* FADE GRADIENTS FOR SMOOTH EDGES ON DESKTOP */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:w-16"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:w-16"></div>

          <div 
            className="flex items-center gap-2.5 overflow-x-auto py-2 px-4 sm:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* FILTER ICON BUTTON (Matches 35x35 rx=15.5 stroke=#F7F7F7) */}
            <button className="flex-shrink-0 flex items-center justify-center w-[35px] h-[35px] rounded-[15.5px] border border-[#F7F7F7] bg-white text-[#78828A] hover:bg-gray-50 hover:text-black transition-colors duration-200">
              <SlidersHorizontal className="w-4 h-4" strokeWidth={2} />
            </button>

            {/* CATEGORY PILLS (Matches h=30 rx=15 stroke=#E3E7EC text=#78828A, Active: bg=#D9381E/80 text=#FDFFFE) */}
            {CATEGORIES.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-5 h-[30px] flex items-center justify-center rounded-[15px] text-[13px] sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
                    isActive 
                      ? "bg-[#D9381E]/80 text-[#FDFFFE] border-transparent shadow-sm" 
                      : "bg-white text-[#78828A] border-[#E3E7EC] hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
