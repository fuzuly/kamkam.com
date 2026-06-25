"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Çok hafif, kusursuz bir Parallax (Sadece dikey hareket, abartılı 3D yok)
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section data-theme="dark" ref={containerRef} className="relative w-full py-24 lg:py-0 lg:min-h-screen overflow-x-hidden bg-[#050505] flex items-center justify-center border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* TEXT CONTENT */}
        <motion.div style={{ y: textY }} className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:max-w-xl z-20 pt-10 lg:pt-0">
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 w-full">
            <span className="w-8 sm:w-12 h-px bg-brand" />
            <span className="text-brand font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center">Parçaları Birleştirdik</span>
            <span className="w-8 sm:w-12 h-px bg-brand lg:hidden" />
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6 drop-shadow-xl">
            Dağınıklığa <br /> Son.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
            Telefonunuzu yoran kalabalığa veda edin. Şehrin tüm ritmi tek bir kusursuz alanda birleşti. Daha hızlı, daha keskin ve tamamen size özel.
          </p>
          
          <Magnetic strength={0.2}>
            <button data-magnetic="true" className="group relative flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center justify-center">
                Uygulamayı İndir
              </span>
              <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </Magnetic>
        </motion.div>

        {/* ULTRA MINIMAL & ELEGANT CSS MOCKUP (DYNAMIC SIZING) */}
        <div className="flex-1 flex items-center justify-center lg:justify-end w-full lg:pr-10 relative">
          <motion.div 
            style={{ y: y1 }}
            className="relative h-[65vh] max-h-[600px] min-h-[450px] aspect-[9/19.5] rounded-[2rem] sm:rounded-[2.5rem] bg-[#0a0a0a] border-[4px] sm:border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden"
          >
            {/* Minimalist Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[3%] min-h-[16px] bg-[#1a1a1a] rounded-b-xl z-20" />
            
            {/* The Screen (User's SVG Image) */}
            <div className="w-full h-full relative z-10 bg-[#0a0a0a]">
              <Image 
                src="/13.svg" 
                alt="KamKam Mobile App Mockup" 
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Subtle Screen Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none z-20" />
          </motion.div>
          
          {/* Subtle Backglow to separate phone from background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        </div>

      </div>
    </section>
  );
}
