"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";

export default function IsletmeHero() {
  return (
    <section data-theme="dark" className="relative w-full min-h-[100svh] bg-black text-white flex flex-col justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      {/* ---------------- MOBILE LAYOUT (< lg) ---------------- */}
      <div className="flex lg:hidden flex-col w-full min-h-[100svh] pt-[110px] sm:pt-[130px] relative z-20">
        
        {/* Mobile Text Block */}
        <div className="flex flex-col items-center text-center w-full flex-shrink-0 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Sadece Müşterilerini Karşıla.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-[280px] sm:max-w-md mx-auto"
          >
            KamKam ağına katıl; şehrin ritmini belirleyen ayrıcalıklı <strong className="text-white font-medium">KamKam topluluğu</strong> doğrudan mekanının enerjisine dahil olsun.
          </motion.p>
        </div>

        {/* Mobile Mockup (Takes all remaining vertical space) */}
        <div className="flex-grow w-full relative mt-8 flex items-end justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[50vh] min-h-[350px] max-h-[600px]"
          >
            <Image 
              src="/isletmemockup.svg" 
              alt="KamKam Isletme App" 
              fill 
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* ---------------- DESKTOP LAYOUT (>= lg) ---------------- */}
      <div className="hidden lg:flex container mx-auto px-6 relative z-20 flex-row items-center justify-between w-full h-[100svh] lg:min-h-[800px]">
        
        {/* Left Column: Text Content */}
        <div className="w-1/2 flex flex-col justify-center text-left z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-8"
          >
            Sadece Müşterilerini Karşıla.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl"
          >
            KamKam ağına katıl; şehrin ritmini belirleyen ayrıcalıklı <strong className="text-white font-medium">KamKam topluluğu</strong> doğrudan mekanının enerjisine dahil olsun.
          </motion.p>
        </div>

        {/* Right Column: Floating Phone Mockup */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[340px] xl:w-[380px] h-[680px] xl:h-[760px] bg-black rounded-[3.5rem] border-[14px] border-[#1a1a1a] shadow-[0_0_80px_rgba(237,27,36,0.25)] flex flex-col overflow-hidden"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-20 flex items-center justify-between px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a2a] shadow-inner" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full bg-black">
                <Image 
                  src="/13.svg" 
                  alt="KamKam App Desktop Mockup" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
