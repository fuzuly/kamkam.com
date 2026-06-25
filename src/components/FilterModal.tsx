"use client";

import React, { useEffect, useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { CATEGORIES } from "@/data/demo-isletmeler";
import { useLenis } from "lenis/react";

import { KesfetFilters } from "@/app/kesfet/page";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: KesfetFilters;
}

export default function FilterModal({ isOpen, onClose, filters }: FilterModalProps) {
  const [sheetState, setSheetState] = useState<"half" | "full">("half");

  // Scroll ref
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Lenis instance
  const lenis = useLenis();

  // Scroll lock & Reset State
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
      setSheetState("half"); // Always open in half state
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const SORT_OPTIONS = ["Önerilen", "En Yakın", "En Yüksek Puan"];
  const PRICE_OPTIONS = ["₺", "₺₺", "₺₺₺", "₺₺₺₺"];
  const DISTANCE_OPTIONS = ["Yürüme Mesafesi", "Araçla Kısa", "Farketmez"];

  const togglePrice = (price: string) => {
    filters.setActivePrices(
      filters.activePrices.includes(price) ? filters.activePrices.filter(p => p !== price) : [...filters.activePrices, price]
    );
  };

  const handleClear = () => {
    filters.setActiveSort("Önerilen");
    filters.setActivePrices([]);
    filters.setActiveDistance("Farketmez");
    filters.setOpenNow(false);
    filters.setHasPromo(false);
  };

  // Forward wheel event from backdrop to scroll container
  const handleBackdropWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += e.deltaY;
    }
  };

  // Mobile detection & Heights
  const [isMobile, setIsMobile] = useState(false);
  const [vh35, setVh35] = useState(300); // Default fallback
  const isHalf = sheetState === "half";

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    setVh35(window.innerHeight * 0.35);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setVh35(window.innerHeight * 0.35);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-[100dvh] z-[100] flex items-end sm:items-center justify-center"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            onWheel={handleBackdropWheel}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            drag={isMobile ? "y" : false}
            // If half (origin is 35vh down): allow dragging UP by 35vh (to 0), and DOWN by 500px.
            // If full (origin is 0): allow dragging UP by 0 (max), and DOWN by 800px.
            dragConstraints={
              isMobile
                ? { 
                    top: isHalf ? -vh35 : 0, 
                    bottom: isHalf ? 500 : vh35 + 500 
                  }
                : { top: 0, bottom: 0 }
            }
            dragElastic={0.05} // Very little rubber-banding beyond max points
            onDragEnd={(e, info) => {
              if (!isMobile) {
                if (info.offset.y > 100) onClose();
                return;
              }

              const y = info.offset.y;
              const velocity = info.velocity.y;

              if (isHalf) {
                // Dragged UP from half (passing threshold or flicking)
                if (y < -50 || velocity < -500) {
                  setSheetState("full");
                } 
                // Dragged DOWN from half
                else if (y > 50 || velocity > 500) {
                  onClose();
                }
              } else {
                // Dragged DOWN from full
                if (y > 50 || velocity > 500) {
                  setSheetState("half");
                }
              }
            }}
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ 
              y: isMobile ? (isHalf ? vh35 : 0) : 0, 
              opacity: 1 
            }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-[85vh] sm:h-auto sm:max-h-[85vh] sm:w-[500px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Mobile Drag Handle */}
            <div className="w-full flex justify-center pt-3 pb-1 sm:hidden cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Filtreler</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div 
              ref={scrollRef}
              onPointerDown={(e) => {
                // Sadece tam ekrandayken (Full) kendi iç scrolluna izin ver
                if (isMobile && !isHalf) {
                  e.stopPropagation();
                }
              }}
              className={`flex-1 px-6 py-6 space-y-8 ${isMobile && isHalf ? 'overflow-hidden' : 'overflow-y-auto min-h-0 overscroll-contain'}`}
            >
              
              {/* Category (Wait, this is mock visual for Categories but it uses activeDistance? Let's remove it entirely since Categories are now in KesfetHero!) */}
              <div className="space-y-3 hidden">
                {/* Hid this because categories are outside now */}
              </div>

              {/* Sort By */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sıralama</h3>
                <div className="flex flex-wrap gap-2">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => filters.setActiveSort(opt)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.activeSort === opt 
                          ? "bg-gray-900 text-white shadow-md" 
                          : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Fiyat Seviyesi</h3>
                <div className="flex gap-2">
                  {PRICE_OPTIONS.map(price => {
                    const isActive = filters.activePrices.includes(price);
                    return (
                      <button
                        key={price}
                        onClick={() => togglePrice(price)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                          isActive 
                            ? "bg-brand/10 border-2 border-brand text-brand" 
                            : "bg-white border-2 border-gray-100 text-gray-500 hover:border-gray-200"
                        }`}
                      >
                        {price}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Distance */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Mesafe</h3>
                <div className="flex flex-wrap gap-2">
                  {DISTANCE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => filters.setActiveDistance(opt)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.activeDistance === opt 
                          ? "bg-brand text-white shadow-md shadow-brand/20" 
                          : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-2 border-t border-gray-100">
                
                {/* Open Now */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Şu An Açık</h4>
                    <p className="text-sm text-gray-500">Sadece şu an açık olan işletmeler</p>
                  </div>
                  <button 
                    onClick={() => filters.setOpenNow(!filters.openNow)}
                    className={`w-12 h-7 rounded-full p-1 transition-colors ${filters.openNow ? 'bg-green-500' : 'bg-gray-200'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${filters.openNow ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                {/* Has Promo */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Kampanyalılar</h4>
                    <p className="text-sm text-gray-500">Aktif indirimi olan işletmeler</p>
                  </div>
                  <button 
                    onClick={() => filters.setHasPromo(!filters.hasPromo)}
                    className={`w-12 h-7 rounded-full p-1 transition-colors ${filters.hasPromo ? 'bg-brand' : 'bg-gray-200'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${filters.hasPromo ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

              </div>
              
              {/* Bottom padding for mobile to not hide behind sticky footer */}
              <div className="h-6" />
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex items-center gap-4">
              <button 
                onClick={handleClear}
                className="px-6 py-3.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Temizle
              </button>
              <button 
                onClick={onClose}
                className="flex-1 bg-brand text-white py-3.5 rounded-xl font-bold shadow-lg shadow-brand/25 hover:bg-brand/90 transition-colors"
              >
                Sonuçları Göster
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
