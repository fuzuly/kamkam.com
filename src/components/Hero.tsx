"use client";

import { useRef } from "react";
import { m as motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/Logo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: moves the video slightly down as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Fade out effect: darkens the video more as you scroll down
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleWords = "Şehri Keşfet".split(" ");

  return (
    <section data-theme="dark" ref={containerRef} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#101010]">
      {/* 1. KAT: PARALLAX VİDEO */}
      <motion.div 
        style={{ y, opacity, willChange: "transform" }}
        className="absolute inset-0 w-full h-[120vh] -top-[10vh] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source
            src="/City_grid_data_streams_flowing_202606222226.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* 2. KAT: KARARTMA, BLUR VE GRADIENT (GEÇİŞ) KATMANLARI */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[6px] z-10 pointer-events-none" />

      {/* 3. KAT: SVG "NOISE" (FİLM GRENİ) FİLTRESİ */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.85" 
              numOctaves="3" 
              stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 4. KAT: YAZILAR VE BUTONLAR (EN ÜST KATMAN) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 max-w-5xl mx-auto -mt-32 perspective-1000"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center pt-[15vh] pb-8 relative z-10"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white text-center leading-[1.1] tracking-tight max-w-5xl">
            Her Şey. Tek Yerde. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-rose-500 to-orange-500">
              Sınır Yok.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg md:text-xl text-slate-200 text-center max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Karmaşaya veda edin. Keşif, ödül ve prestij tek bir dijital anahtarda buluştu. Parçalanmış sistemleri geride bırakın; şehri adımlarınıza göre şekillendiren bu ayrıcalıklı deneyimi yaşayın.
          </p>
        </motion.div>

        {/* LOGO VE SLOGAN KISMI */}
        <motion.div variants={wordVariants} className="mt-8 flex flex-col items-center justify-center gap-6">
          {/* Şirket Logosu */}
          <Logo className="h-16 md:h-24 w-auto text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          
          {/* Slogan */}
          <h3 className="text-lg md:text-xl font-bold tracking-[0.3em] text-slate-100 uppercase">
            KEŞFET. KULLAN. KAZAN.
          </h3>
        </motion.div>

      </motion.div>
    </section>
  );
}
