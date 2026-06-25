"use client";
import { m as motion } from "framer-motion";
import { Star } from "lucide-react";

export default function BentoBox2() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-[#0f0f0f] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-[#121212] hover:border-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.06)] relative h-full"
    >
      {/* SVG Definitions for Gradient */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" /> {/* Parlak sarı */}
            <stop offset="50%" stopColor="#F59E0B" /> {/* Altın amber */}
            <stop offset="100%" stopColor="#D97706" /> {/* Koyu turuncu/altın */}
          </linearGradient>
        </defs>
      </svg>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 mb-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star 
              key={i} 
              className="w-6 h-6 border-none" 
              style={{ 
                fill: "url(#star-premium-gradient)", 
                stroke: "url(#star-premium-gradient)",
                filter: "drop-shadow(0px 4px 6px rgba(245, 158, 11, 0.2))"
              }}
            />
          ))}
        </div>
        <h3 className="text-white text-4xl font-bold mb-3 tracking-tight">Gerçek</h3>
        <p className="text-white/50 text-base leading-snug">
          Yorumlarla<br />Fikirlerin Değerli
        </p>
      </div>
    </motion.div>
  );
}
