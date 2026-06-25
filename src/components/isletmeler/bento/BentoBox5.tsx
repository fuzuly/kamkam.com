"use client";
import { m as motion } from "framer-motion";

export default function BentoBox5() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-[#0f0f0f] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center h-full transition-all hover:bg-[#121212] hover:border-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.06)]"
    >
      <span className="text-white/40 text-sm mb-3 uppercase tracking-widest">Kasada sadece</span>
      <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Okut ve Çık.</h3>
      <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
        Telefonunu okut, ayrıcalığını<br />anında hesabına yansıt.
      </p>
    </motion.div>
  );
}
