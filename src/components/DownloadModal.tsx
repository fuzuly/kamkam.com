"use client";

import React, { useEffect, useState } from "react";
import { m as motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, Smartphone, Download } from "lucide-react";
import Logo from "@/components/Logo";

import { useLenis } from "lenis/react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  placeName: string;
}

export default function DownloadModal({ isOpen, onClose, placeName }: DownloadModalProps) {
  const [isDesktop, setIsDesktop] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth(); // Initial check
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
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

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center pointer-events-none"
          data-lenis-prevent="true"
        >
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />

          {isDesktop ? (
            <motion.div
              initial={{ y: 20, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-[420px] bg-[#fdfdfd] rounded-[2.5rem] p-10 flex flex-col items-center pointer-events-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] z-10 mx-4 border border-black/[0.04] overflow-hidden"
            >
              {/* Abstract Background Gradient Blobs */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-black/5 rounded-full blur-[60px] pointer-events-none" />

              <button 
                onClick={onClose}
                className="absolute top-5 right-5 p-2.5 bg-black/5 hover:bg-black/10 text-black/60 hover:text-black rounded-full transition-all duration-300 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* App Icon Aesthetic */}
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-gray-800 via-black to-gray-900 p-[1px] shadow-2xl mb-8 relative z-10 group">
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[1.4rem] flex items-center justify-center overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <div className="absolute inset-0 bg-brand/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                  <Logo className="w-12 h-auto text-white drop-shadow-md" />
                </div>
              </div>

              <h2 className="text-[28px] font-bold text-black tracking-tight text-center mb-3 leading-[1.1] relative z-10">
                {placeName ? `${placeName} Sizi Bekliyor!` : "Ayrıcalığı Cebinize Taşıyın"}
              </h2>
              
              <p className="text-gray-500 text-center mb-10 px-2 leading-relaxed text-[15px] font-medium relative z-10">
                Sıradanlığı geride bırakın. Tüm kampanyalar ve prestijli mekanlar tek bir dokunuş uzağınızda.
              </p>

              {/* QR Code Container (Glassmorphic) */}
              <div className="w-full p-6 bg-white/60 backdrop-blur-xl border border-black/[0.08] rounded-[24px] flex flex-col items-center relative z-10 shadow-sm transition-transform hover:scale-[1.02] duration-300">
                <div className="bg-white p-3 rounded-[18px] shadow-sm mb-5 border border-black/[0.04]">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://kamkam.com/download" alt="QR Code" className="w-[140px] h-[140px] rounded-lg" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-black/40" />
                  <p className="text-[12px] font-bold tracking-[0.15em] text-black/60 uppercase">Kameraya Okutun</p>
                </div>
                <p className="text-[13px] text-gray-400 font-medium">Hemen indirmek için tarayın</p>
              </div>
            </motion.div>
          ) : (
            /* MOBILE BOTTOM SHEET */
              <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 500 }}
              dragElastic={0.05}
              onDragEnd={handleDragEnd}
              className="relative w-full bg-[#fdfdfd] rounded-t-[40px] flex flex-col pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-10 overflow-hidden max-h-[90vh]"
            >
              {/* Background Glows */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="w-full flex justify-center pt-5 pb-2 shrink-0 cursor-grab active:cursor-grabbing z-20 relative">
                <div className="w-14 h-1.5 bg-black/10 rounded-full" />
              </div>

              <div className="px-6 pb-12 pt-6 flex-grow relative z-10 overflow-y-auto">
                <div className="flex flex-col items-center">
                  
                  {/* App Icon */}
                  <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-gray-800 via-black to-gray-900 p-[1px] shadow-2xl mb-6 relative group">
                    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[1.4rem] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                      <Logo className="w-12 h-auto text-white drop-shadow-md" />
                    </div>
                  </div>

                  <h2 className="text-[28px] font-bold text-black tracking-tight text-center mb-3 leading-[1.15]">
                    {placeName ? `${placeName} Sizi Bekliyor!` : "Ayrıcalığı Cebinize Taşıyın"}
                  </h2>
                  <p className="text-gray-500 text-center mb-10 px-2 leading-relaxed text-[16px] font-medium">
                    Sıradanlığı geride bırakın. Tüm kampanyalar ve prestijli mekanlar tek bir dokunuş uzağınızda.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 w-full">
                    <button className="w-full py-4 bg-black text-white rounded-[20px] font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform text-[17px] shadow-xl shadow-black/20">
                      <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      App Store'dan İndir
                    </button>
                    
                    <button className="w-full py-4 bg-white border border-black/10 text-black rounded-[20px] font-bold flex items-center justify-center gap-3 active:scale-95 transition-all text-[17px] hover:bg-gray-50 shadow-sm">
                      <svg viewBox="0 0 512 512" className="w-6 h-6">
                        <path fill="#4CAF50" d="M325.3 234.3L104.6 13.6C95.2 4.2 82.5-1 69 1c-19.2 2.8-34 20-34 39.5v431c0 19.5 14.8 36.7 34 39.5 13.5 2 26.2-3.2 35.6-12.6l220.7-220.7c4.8-4.8 7.4-11.3 7.4-18.1s-2.6-13.3-7.4-18.1z"/>
                        <path fill="#FFEB3B" d="M362.5 271.5l104.6 104.6c14.1 14.1 14.1 36.9 0 51l-43.2 43.2c-14.1 14.1-36.9 14.1-51 0L268.3 365.7l94.2-94.2z"/>
                        <path fill="#F44336" d="M472.9 203.9L368.3 99.3c-14.1-14.1-36.9-14.1-51 0L212.7 203.9l160.2 160.2 100-100c14.1-14.1 14.1-36.9 0-51z"/>
                        <path fill="#2196F3" d="M325.3 234.3l94.2-94.2-51-51-263.9 263.9 160.2 160.2 60.5-60.5v-218.4z"/>
                      </svg>
                      Google Play'den İndir
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
