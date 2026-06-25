"use client";
import { m as motion } from "framer-motion";
import Image from "next/image";

export default function BentoBox3() {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="rounded-[2rem] overflow-hidden relative flex flex-col items-center pt-10 min-h-[440px] h-full transition-all group border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.6)]"
      style={{
        // Ultra-premium Apple-style radial light sweep: White -> Brand Red -> Deep Black
        background: "radial-gradient(100% 120% at 50% 0%, #ffffff 0%, #d9381e 35%, #080201 70%, #000000 100%)",
        backgroundColor: "#000000"
      }}
    >
      {/* Inner glass reflection line for premium depth */}
      <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] pointer-events-none" />
      
      {/* Noise Texture for organic Apple-like finish (subtle) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <filter id="noiseFilterBento3"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterBento3)" />
        </svg>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 w-full">
        {/* Texts are positioned perfectly where the red transition happens */}
        <span className="text-white/95 text-xl font-medium mb-2 drop-shadow-md">Size en yakın</span>
        <h3 className="text-[6.5rem] md:text-[8rem] font-bold text-white leading-none tracking-tighter mb-3 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          500+
        </h3>
        <span className="text-white/95 text-lg md:text-xl font-light drop-shadow-md">Özenle Seçilmiş İşletme</span>
      </div>
      
      {/* Bottom SVG Illustration - Fades elegantly into the bottom to hide any sharp edges or SVG artifacts */}
      <div 
        className="absolute bottom-0 inset-x-0 w-full h-[55%] flex flex-col justify-end z-10 pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
        }}
      >
        <Image 
          src="/Group 1321315994.svg" 
          alt="KamKam Dashboard" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out" 
        />
      </div>
    </motion.div>
  );
}
