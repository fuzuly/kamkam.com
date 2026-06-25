"use client";

import Link from "next/link";
import Logo from "./Logo";
import { IconShieldCheck, IconLock, IconBuildingStore, IconDeviceMobile, IconArrowUpRight, IconArrowUp } from "@tabler/icons-react";
import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import Image from "next/image";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax / Reveal Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // Current Time / Ticker
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const trustFeatures = [
    { icon: <IconShieldCheck size={28} stroke={1.5} />, title: "KVKK Uyumlu" },
    { icon: <IconLock size={28} stroke={1.5} />, title: "SSL Şifreli" },
    { icon: <IconBuildingStore size={28} stroke={1.5} />, title: "100+ İşletme" },
    { icon: <IconDeviceMobile size={28} stroke={1.5} />, title: "Ücretsiz App" },
  ];

  const mainLinks = [
    { label: "Keşfet", href: "/kesfet" },
    { label: "Kamkam Nedir?", href: "/nedir" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ];

  const legalLinks = [
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { label: "Teslimat ve İade", href: "/teslimat" },
    { label: "Mesafeli Satış", href: "/mesafeli-satis" },
  ];

  return (
    <div data-theme="dark" ref={containerRef} className="relative bg-[#050505] text-slate-300 overflow-hidden pt-12" id="footer">
      
      {/* DYNAMIC NOISE & AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.03]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <filter id="noiseFilterFooter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterFooter)" />
        </svg>
      </div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.footer style={{ y, opacity }} className="relative z-10 pt-32 pb-12 flex flex-col">
        
        {/* MARQUEE TEXT */}
        <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-5 mb-32 flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex items-center space-x-8 text-sm font-semibold tracking-[0.2em] text-white/40 uppercase"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>Keşfet</span><span className="w-1 h-1 rounded-full bg-brand" />
                <span>Kullan</span><span className="w-1 h-1 rounded-full bg-brand" />
                <span>Kazan</span><span className="w-1 h-1 rounded-full bg-brand" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* TOP SECTION: TRUST BADGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {trustFeatures.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center group cursor-default p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors duration-500">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-slate-300 mb-5 group-hover:text-brand group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* MIDDLE SECTION: MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24">
            
            {/* Col 1: Brand & Slogan */}
            <div className="md:col-span-5 flex flex-col items-start">
              <Link href="/" className="inline-block mb-8 group" aria-label="KamKam Anasayfa">
                <Logo className="h-14 w-auto text-white group-hover:opacity-80 transition-opacity" />
              </Link>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-[1.1] mb-6">
                Hazır mısınız?
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-sm mb-10 font-medium">
                Şehri telefonunla keşfet. Özenle seçilmiş işletmeler, sınırsız ayrıcalık.
              </p>
              
              {/* Newsletter AJAX Input */}
              <div className="w-full max-w-sm relative group">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-32 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand/50 focus:bg-white/10 transition-all duration-300"
                />
                <div className="absolute right-1 top-1 bottom-1">
                  <Magnetic strength={0.2}>
                    <button data-magnetic="true" className="h-full bg-brand text-white px-6 rounded-full text-sm font-semibold hover:bg-brand/90 transition-colors">
                      Katıl
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>

            {/* Col 2: Main Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white font-bold mb-8 tracking-wider text-sm uppercase opacity-50">Keşfet</h4>
              <ul className="space-y-5">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="group relative inline-flex items-center text-lg text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                      <IconArrowUpRight size={16} className="ml-2 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-brand" />
                      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Legal Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-8 tracking-wider text-sm uppercase opacity-50">Kurumsal</h4>
              <ul className="space-y-5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="group relative inline-flex items-center text-lg text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* IYZICO SECURE PAYMENT SECTION (BOTTOM-MIDDLE) */}
          <div className="flex flex-col items-center justify-center mb-12 relative border-t border-white/5 pt-12">
            <div className="absolute inset-0 w-64 h-24 bg-white/5 blur-3xl rounded-full mx-auto" />
            <p className="text-[10px] text-slate-500 mb-6 tracking-[0.3em] uppercase font-bold">
              Güvenli Ödeme Altyapısı
            </p>
            <div className="relative group cursor-default">
              <Image 
                src="/iyzico_logo.svg" 
                alt="iyzico ile Öde - Visa ve Mastercard" 
                width={150}
                height={40}
                className="h-10 w-auto opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* BOTTOM SECTION: COPYRIGHT & TICKER */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-500">
                © 2026 KamKam. Tüm hakları saklıdır.
              </p>
              <span className="text-slate-700 hidden md:inline">|</span>
              <p className="text-sm font-medium text-slate-400 hidden md:inline">
                Türkiye'nin Şehir Rehberi
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              {/* Live Status */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Tüm Sistemler Aktif
              </div>
              <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                IST {time}
              </div>
            </div>

          </div>
        </div>

        {/* Back to Top Floating Button */}
        <div className="absolute right-8 top-16">
          <Magnetic strength={0.3}>
            <button 
              data-magnetic="true"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all duration-300 shadow-xl"
              aria-label="Yukarı Çık"
            >
              <IconArrowUp size={20} />
            </button>
          </Magnetic>
        </div>

      </motion.footer>
    </div>
  );
}
