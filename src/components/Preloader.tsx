"use client";

import React, { useEffect, useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Sadece ilk açılışta göstermek için sessionStorage kontrolü
    const hasLoadedBefore = sessionStorage.getItem("kamkam_preloaded");
    if (hasLoadedBefore) {
      setShouldRender(false);
      return;
    }

    // Sayaç mantığı
    let currentProgress = 0;
    
    // Rastgele artışlarla 100'e kadar saydırıyoruz (toplam yaklaşık 2-2.5 saniye sürecek)
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 2; // 2 ile 9 arası
      currentProgress += increment;

      if (currentProgress >= 85) {
        setShowText(true);
      }

      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        
        // 100 olduktan kısa süre sonra bitir
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("kamkam_preloaded", "true");
        }, 800);
      } else {
        setProgress(currentProgress);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shouldRender && !isFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender, isFinished]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-none"
        >
          {/* LOGO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <Logo className="h-14 w-auto text-foreground" />
          </motion.div>

          {/* SAYAÇ */}
          <div className="text-[80px] md:text-[120px] font-black tracking-tighter text-gray-900 leading-none">
            {progress}%
          </div>

          {/* İLERLEME ÇUBUĞU */}
          <div className="w-[200px] h-1 bg-gray-100 rounded-full mt-8 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          {/* FİRMA YAZISI (Sona doğru çıkar) */}
          <div className="h-10 mt-6 flex items-center justify-center">
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full px-4 text-center"
                >
                  <p className="text-[9px] sm:text-[11px] md:text-[13px] font-bold text-gray-400 tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-relaxed">
                    KamKam Teknoloji ve Ticaret Anonim Şirketi
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
