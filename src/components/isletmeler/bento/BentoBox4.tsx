"use client";
import { m as motion } from "framer-motion";

export default function BentoBox4() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-[#0f0f0f] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center flex-1 transition-all hover:bg-[#121212] hover:border-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.06)]"
    >
      <span className="text-white/40 text-base mb-2 font-medium">Yeni müşteriler</span>
      <div className="flex flex-col items-center justify-center mt-2">
        <h3 className="text-[5.5rem] font-black leading-[0.8] mb-1 bg-gradient-to-l from-white via-[#d9381e] to-[#4a1005] text-transparent bg-clip-text drop-shadow-[0_4px_12px_rgba(217,56,30,0.3)]">
          0
        </h3>
        <h3 className="text-[2.5rem] font-bold bg-gradient-to-l from-white via-[#d9381e] to-[#4a1005] text-transparent bg-clip-text tracking-tight drop-shadow-[0_2px_8px_rgba(217,56,30,0.2)]">
          Komisyon
        </h3>
      </div>
    </motion.div>
  );
}
