"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IconQrcode, IconBolt, IconGift, IconDeviceMobileMessage } from "@tabler/icons-react";
import Image from "next/image";

export default function TripleMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Center phone parallax (moves up faster)
  const yCenter = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Side phones parallax (moves up slower)
  const ySide = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* HEADER AREA */}
        <div className="text-center mb-20 max-w-3xl mx-auto w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 w-full"
          >
            <span className="w-8 sm:w-12 h-px bg-brand" />
            <span className="text-brand font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center">Kuralları Biz Koyarız</span>
            <span className="w-8 sm:w-12 h-px bg-brand" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6"
          >
            Yenilik Değil. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              Devrim.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-medium"
          >
            Kasa kuyruklarını ve şişirilmiş sadakat programlarını yok ettik. Sadece okut, al ve çık.
          </motion.p>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mt-12">
          
          {/* LEFT FEATURES */}
          <div className="lg:col-span-3 flex flex-col gap-16 order-2 lg:order-1 text-center lg:text-right">
            
            {/* FEATURE 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col items-center lg:items-end gap-5 cursor-default"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-brand/30 group-hover:shadow-[0_12px_32px_-8px_rgba(237,27,36,0.25)]">
                <div className="absolute inset-0 rounded-full bg-brand/[0.03] scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
                <IconQrcode size={28} stroke={1.2} className="text-slate-800 group-hover:text-brand transition-colors duration-500 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-brand transition-colors duration-500">Tek Hareketle Çözüm</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Numara veya formlarla uğraşmadan sadece kodunuzu okutun, ayrıcalıklar anında cüzdanınıza yansısın.
                </p>
              </div>
            </motion.div>

            {/* FEATURE 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center lg:items-end gap-5 cursor-default"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-brand/30 group-hover:shadow-[0_12px_32px_-8px_rgba(237,27,36,0.25)]">
                <div className="absolute inset-0 rounded-full bg-brand/[0.03] scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
                <IconBolt size={28} stroke={1.2} className="text-slate-800 group-hover:text-brand transition-colors duration-500 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-brand transition-colors duration-500">Kişisel Şehir Rehberiniz</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Karmaşık listelerde kaybolmadan, şehrin ritmini ve modunuza en uygun seçkin mekanları haritadan keşfedin.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CENTER TRIPLE MOCKUPS */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[500px] sm:h-[650px] order-1 lg:order-2 perspective-[2000px]">
            
            {/* LEFT PHONE (Behind) */}
            <motion.div 
              style={{ y: ySide }}
              className="absolute left-1/2 top-16 w-[180px] sm:w-[220px] h-[390px] sm:h-[480px] rounded-[2rem] bg-black border-[4px] border-slate-800 shadow-xl overflow-hidden z-10 opacity-60 blur-[1.5px] origin-bottom-right"
              animate={{ x: "-110%", rotate: -8 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-b-lg z-20" />
              <Image src="/11.svg" alt="Left App Screen" fill priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </motion.div>

            {/* RIGHT PHONE (Behind) */}
            <motion.div 
              style={{ y: ySide }}
              className="absolute left-1/2 top-16 w-[180px] sm:w-[220px] h-[390px] sm:h-[480px] rounded-[2rem] bg-black border-[4px] border-slate-800 shadow-xl overflow-hidden z-10 opacity-60 blur-[1.5px] origin-bottom-left"
              animate={{ x: "10%", rotate: 8 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-b-lg z-20" />
              <Image src="/12.svg" alt="Right App Screen" fill priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </motion.div>

            {/* CENTER PHONE (Front) */}
            <motion.div 
              style={{ y: yCenter }}
              className="absolute z-30 left-1/2 -translate-x-1/2 w-[220px] sm:w-[260px] h-[480px] sm:h-[560px] rounded-[2.5rem] bg-black border-[6px] border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-xl z-20" />
              <Image src="/13.svg" alt="Center App Screen" fill priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </motion.div>

          </div>

          {/* RIGHT FEATURES */}
          <div className="lg:col-span-3 flex flex-col gap-16 order-3 text-center lg:text-left">
            
            {/* FEATURE 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col items-center lg:items-start gap-5 cursor-default"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-brand/30 group-hover:shadow-[0_12px_32px_-8px_rgba(237,27,36,0.25)]">
                <div className="absolute inset-0 rounded-full bg-brand/[0.03] scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
                <IconGift size={28} stroke={1.2} className="text-slate-800 group-hover:text-brand transition-colors duration-500 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-brand transition-colors duration-500">Zincirsiz, Özgür Ödüller</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Ödüllerinizi tek mekana hapsetmeyin; kazandığınız puanları KamKam ağındaki dilediğiniz işletmede özgürce harcayın.
                </p>
              </div>
            </motion.div>

            {/* FEATURE 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center lg:items-start gap-5 cursor-default"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-brand/30 group-hover:shadow-[0_12px_32px_-8px_rgba(237,27,36,0.25)]">
                <div className="absolute inset-0 rounded-full bg-brand/[0.03] scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
                <IconDeviceMobileMessage size={28} stroke={1.2} className="text-slate-800 group-hover:text-brand transition-colors duration-500 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-brand transition-colors duration-500">Sıkıcı Değil, Dinamik ve Eğlenceli</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Sıradan rutinleri geride bırakın; şehrin ritmine katıldıkça sürekli yenilenen avantajlarla KamKam'ı eğlenceli bir yaşam tarzı haline getirin.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
