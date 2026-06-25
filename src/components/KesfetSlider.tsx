"use client";
import React, { useRef, useEffect } from "react";
import { m as motion } from "framer-motion";
import { Gift, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

import { FEATURED } from "@/data/demo-isletmeler";

interface KesfetSliderProps {
  onCardClick?: (placeName: string) => void;
}

export default function KesfetSlider({ onCardClick }: KesfetSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Force scroll position to 0 on mount to fix history navigation restoring scroll state
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Scroll roughly one card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-white pt-2 pb-2 relative z-20">
      {/* Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex justify-between items-center">
        <h2 className="text-[15px] sm:text-[17px] font-extrabold text-[#37474F]">
          Öne Çıkanlar
        </h2>
        <a 
          href="/one-cikanlar" 
          className="flex items-center gap-0.5 px-3.5 py-2 bg-white border border-[#E3E7EC] rounded-full text-[12px] sm:text-[13px] font-bold text-[#37474F] hover:bg-gray-50 transition-colors shadow-sm"
        >
          Hepsini Gör
          <ChevronRight className="w-3.5 h-3.5 text-[#78828A]" strokeWidth={2.5} />
        </a>
      </div>

      {/* Cards List Wrapper - NO max-w-7xl to allow full bleed to screen edge */}
      <div className="w-full relative group">
        
        {/* DESKTOP SCROLL ARROWS */}
        <div className="hidden md:block max-w-7xl mx-auto relative pointer-events-none">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-[77px] -translate-y-1/2 z-30 w-11 h-11 bg-white/90 backdrop-blur-sm border border-[#E3E7EC] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center text-[#37474F] hover:text-[#D9381E] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 pointer-events-auto"
            aria-label="Sola Kaydır"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-[77px] -translate-y-1/2 z-30 w-11 h-11 bg-white/90 backdrop-blur-sm border border-[#E3E7EC] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center text-[#37474F] hover:text-[#D9381E] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 pointer-events-auto"
            aria-label="Sağa Kaydır"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-2.5 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .dynamic-edge-left {
              margin-left: 1rem;
              scroll-margin-left: 1rem;
            }
            .dynamic-edge-right {
              margin-right: 1rem;
            }
            @media (min-width: 640px) {
              .dynamic-edge-left {
                margin-left: 1.5rem;
                scroll-margin-left: 1.5rem;
              }
              .dynamic-edge-right {
                margin-right: 1.5rem;
              }
            }
            @media (min-width: 1024px) {
              .dynamic-edge-left {
                margin-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem));
                scroll-margin-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem));
              }
              .dynamic-edge-right {
                margin-right: max(2rem, calc((100vw - 80rem) / 2 + 2rem));
              }
            }
          `}</style>
          
          {FEATURED.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === FEATURED.length - 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                onClick={() => onCardClick?.(item.name)}
                className={`relative w-[257px] h-[155px] rounded-[16px] overflow-hidden flex-shrink-0 snap-start cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 group ${isFirst ? 'dynamic-edge-left' : ''} ${isLast ? 'dynamic-edge-right' : ''}`}
              >
                {/* Background Card Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index < 3}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 300px"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top-Left Avatar Badge */}
                <div className="absolute top-[9px] left-[9px]">
                  <Image
                    src={item.avatar}
                    alt={`${item.name} logo`}
                    width={53}
                    height={53}
                    className="rounded-full border-2 border-white object-contain p-1.5 shadow-sm bg-white"
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-end">
                  {/* Info Row: Title & Category */}
                  <div className="flex justify-between items-baseline mb-1.5">
                    <h3 className="font-bold text-[14px] text-white truncate max-w-[160px]">
                      {item.name}
                    </h3>
                    {item.category && (
                      <div className="flex items-center gap-0.5 text-[11px] font-semibold text-white/90 shrink-0">
                        <span>{item.category}</span>
                      </div>
                    )}
                  </div>

                  {/* Badges Row */}
                  <div className="flex justify-between items-center gap-2">
                    {/* Left: Promo Tag */}
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded-full text-[9px] font-medium text-white truncate">
                      <Gift className="w-2.5 h-2.5 shrink-0" />
                      <span className="truncate">{item.promoOffer}</span>
                    </div>

                    {/* Right: Metadata (Location & Status) */}
                    <div className="flex items-center gap-1 shrink-0">
                      {item.location && (
                        <div className="flex items-center gap-0.5 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded-full text-[9px] text-white">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.status && (
                        <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white ${
                          item.status === 'Açık' ? 'bg-[#2E7D32]' : 'bg-[#E53935]'
                        }`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
