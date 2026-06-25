"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconChartLine, IconUsersGroup, IconDeviceAnalytics, IconArrowUpRight } from "@tabler/icons-react";

export default function BusinessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Çok daha hafif ve güvenli Parallax değerleri
  const yDashboard = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [40, -10]);

  return (
    <section data-theme="dark" ref={containerRef} className="relative w-full py-24 md:py-32 lg:py-40 bg-[#050505] overflow-hidden border-t border-white/5 flex items-center min-h-[90vh]">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-brand/10 blur-[120px] lg:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* LEFT SIDE: TYPOGRAPHY & COPY */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 lg:mb-8 w-full"
            >
              <span className="w-8 sm:w-12 h-px bg-brand" />
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center">İşletmeler İçin</span>
              <span className="w-8 sm:w-12 h-px bg-brand lg:hidden" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6 drop-shadow-lg"
            >
              Karanlıkta İlerlemeyin. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                Kusursuz İçgörüyle Büyüyün.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-10 lg:mb-12 max-w-lg"
            >
              Müşteriyi elde tutmak agresif kampanyalarla değil, kusursuz bir deneyimle başlar. Etkileşimi o kadar pürüzsüz kılın ki, misafiriniz daha kapıdan çıkmadan bir sonraki gelişini planlasın.
            </motion.p>

            {/* FEATURE LIST */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5 sm:gap-6 w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <IconChartLine size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">Premium Saha Desteği</h4>
                  <p className="text-slate-500 text-xs sm:text-sm">Yazılımı kurup sizi yalnız bırakmıyoruz. Özel saha ekibimizle tüm süreçte fiziksel olarak yanınızdayız. Kusursuz teknoloji, insani dokunuş.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <IconUsersGroup size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">Çapraz Müşteri Ağı</h4>
                  <p className="text-slate-500 text-xs sm:text-sm">Sadece kendi müşterinizle yetinmeyin. Ağımızda puan kazanan binlerce kullanıcıyı işletmenize çekin, şehrin akışına anında katılın.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: 3D FLOATING DASHBOARD MOCKUP */}
          <div className="w-full lg:w-6/12 relative flex items-center justify-center mt-16 lg:mt-0 px-4 sm:px-12">
            
            {/* ANA EKRAN (Tam Merkezde) */}
            <motion.div 
              style={{ y: yDashboard }}
              className="relative w-full max-w-[480px] h-[340px] sm:h-[400px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-8 pt-10 sm:pt-14 flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="text-white/50 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">Aylık İşlem Hacmi</div>
                  <div className="text-white font-bold text-2xl sm:text-4xl">₺3.2M<span className="text-emerald-400 text-[10px] sm:text-sm ml-2">+14%</span></div>
                </div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <IconChartLine size={24} className="sm:w-8 sm:h-8" />
                </div>
              </div>

              {/* Grafikler */}
              <div className="flex-1 w-full relative flex items-end pt-4">
                <div className="w-full h-full flex items-end justify-between gap-1.5 sm:gap-2 px-1 z-10">
                  {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
                    <div key={i} className="w-1/6 relative group">
                      <div 
                        className="w-full bg-white/10 rounded-t-md sm:rounded-t-lg transition-all duration-500 group-hover:bg-brand/50" 
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <svg className="absolute inset-0 w-full h-full z-0 opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,70 Q20,40 33,60 T66,30 T100,20" fill="none" stroke="#ED1B24" strokeWidth="2" className="drop-shadow-[0_0_10px_rgba(237,27,36,0.5)]" />
                </svg>
              </div>

              {/* UÇAN KART 1: Sol Üst Köşeye Sabitlendi - Daha yukarı alındı */}
              <motion.div 
                style={{ y: yCard1 }}
                className="absolute -top-16 sm:-top-14 -left-2 sm:-left-12 w-36 sm:w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl z-20"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-brand"></span>
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-xs font-semibold uppercase">Aktif Müşteri</span>
                </div>
                <div className="text-white font-bold text-lg sm:text-2xl">42<span className="text-white/40 text-[10px] sm:text-sm font-normal ml-1">mağazada</span></div>
              </motion.div>

              {/* UÇAN KART 2: Sağ Alt Köşeye Sabitlendi */}
              <motion.div 
                style={{ y: yCard2 }}
                className="absolute -bottom-10 -right-2 sm:-right-10 w-44 sm:w-56 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-5 shadow-2xl z-20"
              >
                <div className="text-white/50 text-[9px] sm:text-xs font-semibold uppercase mb-1.5 sm:mb-2">Kampanya Dönüşümü</div>
                <div className="flex items-end gap-2 sm:gap-4">
                  <div className="text-white font-bold text-xl sm:text-3xl">%68</div>
                  <div className="flex items-center text-emerald-400 text-[10px] sm:text-sm font-semibold mb-1">
                    <IconArrowUpRight size={14} className="sm:w-4 sm:h-4" /> 12%
                  </div>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-2 sm:mt-4 overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[68%]" />
                </div>
              </motion.div>

              {/* UÇAN KART 3: Sağ Üst Kenara Sabitlendi (Yeni Katılımcı) */}
              <motion.div 
                style={{ y: yCard3 }}
                className="absolute -top-6 sm:-top-8 -right-2 sm:-right-8 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full py-1.5 px-2.5 sm:py-2 sm:px-4 shadow-xl z-20 flex items-center gap-1.5 sm:gap-3"
              >
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-slate-700 border-2 border-[#050505]" />
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-slate-600 border-2 border-[#050505]" />
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand border-2 border-[#050505] flex items-center justify-center text-[7px] sm:text-[10px] text-white font-bold">+1k</div>
                </div>
                <div className="text-white/80 text-[9px] sm:text-xs font-medium">Yeni Katılım</div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
