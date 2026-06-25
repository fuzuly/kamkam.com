"use client";

import { useState, useRef, useEffect } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Route, ChevronDown, Check, X, Search, Heart, Map as MapIcon } from "lucide-react";
import { KesfetFilters } from "@/app/kesfet/page";
import { PLACES } from "@/data/demo-isletmeler";
import Image from "next/image";

const SORT_OPTIONS = ["Önerilen", "En Yakın", "En Yüksek Puan"];

export default function KesfetCards({ filters }: { filters: KesfetFilters }) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  // 1. FILTERING LOGIC
  const filteredPlaces = PLACES.filter(place => {
    // Category match
    if (filters.activeCategory !== "Tümü" && place.category !== filters.activeCategory) return false;
    
    // Search match
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      if (!place.name.toLowerCase().includes(q) && !place.category.toLowerCase().includes(q)) return false;
    }

    // Open Now
    if (filters.openNow && place.status !== "Açık") return false;

    // Promo match (Mock logic: if true, only show places with extra campaigns)
    if (filters.hasPromo && !place.extraCampaigns) return false;

    return true;
  });

  // 2. ACTIVE BADGES COMPUTATION
  const activeBadges: { label: string; onRemove: () => void }[] = [];
  
  if (filters.activeCategory !== "Tümü") {
    activeBadges.push({ label: filters.activeCategory, onRemove: () => filters.setActiveCategory("Tümü") });
  }
  if (filters.openNow) {
    activeBadges.push({ label: "Şu An Açık", onRemove: () => filters.setOpenNow(false) });
  }
  if (filters.hasPromo) {
    activeBadges.push({ label: "Kampanyalılar", onRemove: () => filters.setHasPromo(false) });
  }
  filters.activePrices.forEach(price => {
    activeBadges.push({ label: price, onRemove: () => filters.setActivePrices(filters.activePrices.filter(p => p !== price)) });
  });

  const clearAllFilters = () => {
    filters.setActiveCategory("Tümü");
    filters.setSearchQuery("");
    filters.setOpenNow(false);
    filters.setHasPromo(false);
    filters.setActivePrices([]);
    filters.setActiveDistance("Farketmez");
    filters.setActiveSort("Önerilen");
  };

  return (
    <section className="w-full bg-white pb-24 pt-4 sm:pt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* SEARCH BAR (Centered above "Tüm İşletmeler") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full sm:max-w-xl mx-auto px-4 sm:px-0 mb-8 sm:mb-12"
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => filters.setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 sm:py-4 bg-white border border-gray-200/80 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40 transition-all shadow-sm hover:shadow-md text-[15px] sm:text-[16px] font-medium"
              placeholder="Hadi sen de KamKam'la..."
            />
          </div>
        </motion.div>

        {/* HEADER ROW: Title & Sort Button */}
        <div className="flex justify-between items-end px-4 sm:px-0 mb-4 sm:mb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[17px] sm:text-[19px] font-extrabold text-[#37474F]">
              Tüm İşletmeler
              <span className="text-sm text-gray-400 font-medium ml-2">({filteredPlaces.length})</span>
            </h2>

            {/* ACTIVE BADGES */}
            {activeBadges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {activeBadges.map((badge, idx) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-700 border border-gray-200"
                  >
                    {badge.label}
                    <button onClick={badge.onRemove} className="w-4 h-4 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                      <X className="w-3 h-3 text-gray-600" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#E3E7EC] rounded-full text-[12px] sm:text-[13px] font-bold text-[#37474F] hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
            >
              <span className="text-[#78828A] font-medium hidden sm:inline">Sırala:</span> 
              <span>{filters.activeSort}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#78828A] ml-0.5" />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#E3E7EC] shadow-xl shadow-black/5 rounded-[16px] p-1.5 z-50 flex flex-col gap-0.5"
                >
                  {SORT_OPTIONS.map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        filters.setActiveSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-[12px] text-[13px] font-semibold transition-colors ${
                        filters.activeSort === option ? "bg-[#D9381E]/10 text-[#D9381E]" : "text-[#37474F] hover:bg-gray-50"
                      }`}
                    >
                      {option}
                      {filters.activeSort === option && <Check className="w-4 h-4" strokeWidth={3} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* VIEW: GRID vs EMPTY */}
        <div className="px-0 sm:px-0">
          <AnimatePresence mode="wait">

            {/* EMPTY STATE */}
            {filteredPlaces.length === 0 && (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full py-24 flex flex-col items-center justify-center text-center px-4"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sonuç Bulunamadı</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                  Görünüşe göre seçtiğin kriterlere uygun bir mekan yok. Filtreleri esneterek yeniden deneyebilirsin.
                </p>
                <button 
                  onClick={clearAllFilters}
                  className="px-8 py-3.5 bg-brand text-white rounded-full font-bold shadow-lg shadow-brand/20 hover:bg-brand/90 transition-all active:scale-95"
                >
                  Filtreleri Temizle
                </button>
              </motion.div>
            )}

            {/* GRID LAYOUT */}
            {filteredPlaces.length > 0 && (
              <motion.div
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6"
              >
                {filteredPlaces.map((place, index) => {
                  const isFav = favorites.includes(place.id);

                  return (
                    <motion.div
                      key={place.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                      onClick={() => filters.openDownload(place.name)}
                      className="group relative flex items-center p-4 sm:p-3 rounded-none sm:rounded-[24px] border-none sm:border sm:border-[#E3E7EC] bg-white sm:hover:border-[#D9381E]/30 sm:hover:shadow-[0_8px_30px_rgb(217,56,30,0.08)] transition-all duration-300 cursor-pointer"
                    >
                      {/* FAVORITE HEART BUTTON */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm sm:bg-white rounded-full border border-gray-100 hover:scale-110 active:scale-90 transition-all shadow-sm"
                      >
                        <Heart 
                          className={`w-4 h-4 transition-colors ${isFav ? "fill-brand text-brand" : "text-gray-400 group-hover:text-gray-600"}`} 
                        />
                      </button>
                      
                      {/* IMAGE WRAPPER */}
                      <div className="relative w-[74px] h-[74px] flex-shrink-0">
                        <div className="w-full h-full relative rounded-[20px] overflow-hidden bg-white border border-[#E3E7EC]/50 shadow-sm">
                          <Image 
                            src={place.image} 
                            alt={place.name} 
                            fill
                            sizes="74px"
                            className="object-contain p-2 group-hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        
                        {/* STATUS DOT */}
                        <div className={`absolute -top-1 -right-1 w-[14px] h-[14px] rounded-full border-[3px] border-white z-10 ${place.status === "Açık" ? "bg-[#10B981]" : "bg-gray-300"}`}>
                          {place.status === "Açık" && (
                            <span className="absolute -inset-[1px] rounded-full border border-[#10B981] animate-ping opacity-50"></span>
                          )}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="ml-4 flex flex-col flex-grow justify-center pr-8">
                        
                        {/* TOP ROW: Title & Category */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111111] line-clamp-1 group-hover:text-[#D9381E] transition-colors leading-tight">
                            {place.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                          <span className="text-[11px] font-semibold text-[#6B7280]">
                            {place.category}
                          </span>
                        </div>

                        {/* MIDDLE ROW: KamKam Badge & Extra Campaigns */}
                        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                          <div className="bg-brand/5 border border-brand/20 text-[#D9381E] px-2.5 py-1 rounded-[8px] text-[10px] sm:text-[11px] font-bold tracking-wide inline-block">
                            {place.badge}
                          </div>
                          {place.extraCampaigns && place.extraCampaigns > 0 ? (
                            <div className="bg-brand/5 border border-brand/20 text-[#D9381E] px-2 py-1 rounded-[8px] text-[10px] sm:text-[11px] font-bold tracking-wide inline-block">
                              +{place.extraCampaigns}
                            </div>
                          ) : null}
                        </div>

                        {/* BOTTOM ROW: Address & Route Icon */}
                        <div className="mt-1.5 flex items-center gap-1.5 text-[#9CA4AB]">
                          <Route className="w-3.5 h-3.5" />
                          <span className="text-[11px] sm:text-[12px] font-medium line-clamp-1">{place.address}</span>
                        </div>

                      </div>

                      {/* MOBILE DIVIDER */}
                      {index !== filteredPlaces.length - 1 && (
                        <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-[#E3E7EC]/70 sm:hidden"></div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
