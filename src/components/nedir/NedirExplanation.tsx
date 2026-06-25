"use client";

import { m as motion } from "framer-motion";
import { User, Building2 } from "lucide-react";

export default function NedirExplanation() {
  return (
    <section className="w-full pt-36 pb-12 md:py-16 bg-white text-black relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black">
            Nedir?
          </h2>
        </motion.div>

        {/* Content Carousel (Mobile) / Grid (Desktop) */}
        <div className="flex lg:grid lg:grid-cols-12 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Kullanıcılar İçin (Red Premium Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85vw] md:w-[70vw] lg:w-auto shrink-0 snap-center lg:col-span-7 group bg-gradient-to-br from-[#E63946] via-[#D32F2F] to-[#B71C1C] text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-brand/20 border border-white/10"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1rem] bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-5 md:mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <User className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-white/70 mb-3 md:mb-4 uppercase">
                Kullanıcılarımız İçin
              </h3>
              
              <p className="text-lg md:text-2xl lg:text-[1.75rem] font-semibold tracking-tight leading-[1.3] md:leading-[1.4] text-white">
                Sadece mekanlara gitmeyin, gittiğiniz her yerde ayrıcalığı hissedin. Kusursuz bir sadakat ağıyla çalışan KamKam; her ziyaretinizi anında bir kampanyaya, her girişinizi <span className="text-white relative whitespace-nowrap"><span className="relative z-10">prestijli bir karşılamaya</span><span className="absolute bottom-0.5 md:bottom-1.5 left-0 w-full h-1.5 md:h-2 bg-black/20 -z-0 rounded-sm"></span></span> dönüştüren akıllı şehir rehberinizdir.
              </p>
            </div>
          </motion.div>

          {/* İşletmeler İçin (Black Premium Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85vw] md:w-[70vw] lg:w-auto shrink-0 snap-center lg:col-span-5 group bg-gradient-to-br from-gray-900 via-[#111] to-black text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-black/30 border border-white/10"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1rem] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-5 md:mb-6 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                <Building2 className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-white/50 mb-3 md:mb-4 uppercase">
                İşletmelerimiz İçin
              </h3>
              
              <p className="text-lg md:text-2xl lg:text-[1.75rem] font-semibold tracking-tight leading-[1.3] md:leading-[1.4] text-white">
                Markanızı ucuzlatmadan ve sizi hiç yormadan, kapıdan giren müşteriyi <span className="text-white relative whitespace-nowrap"><span className="relative z-10">kendi kendine geri getiren</span><span className="absolute bottom-0.5 md:bottom-1.5 left-0 w-full h-1.5 md:h-2 bg-white/20 -z-0 rounded-sm"></span></span> arka plan gücüdür.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
