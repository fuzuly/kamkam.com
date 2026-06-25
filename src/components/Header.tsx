"use client";

import { useState, useEffect, useRef } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { IconWorld, IconMenu2, IconX, IconChevronDown, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/components/Logo";
import Magnetic from "./Magnetic";
import DownloadModal from "./DownloadModal";
import Image from "next/image";

import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Keşfet", href: "/kesfet" },
  { label: "İşletmeler İçin", href: "/isletmeler" },
  { label: "Kamkam Nedir?", href: "/nedir" },
  { label: "Uygulamayı İndir", href: "/indir" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(pathname === "/"); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("TR");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 10);

      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let overDark = false;
      const headerHeight = 80;

      darkSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
          overDark = true;
        }
      });
      
      setIsOverDarkSection(overDark);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateHeaderState();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run when pathname changes

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Renk mantığı:
  // Koyu tema sadece koyu bir bölümün üzerindeysek geçerli olmalı.
  // Ana sayfanın en üstü (Hero) dark temalıdır, bu yüzden isOverDarkSection true olur.
  // Keşfet sayfasının en üstü beyazdır, bu yüzden isOverDarkSection false olur.
  const isDarkTheme = isOverDarkSection;
  
  const textColor = isDarkTheme ? "text-white" : "text-foreground";
  const hoverColor = isDarkTheme ? "hover:text-brand" : "hover:text-brand";
  const headerBg = !isScrolled 
    ? "bg-transparent py-6"
    : isOverDarkSection
      ? "bg-black/70 backdrop-blur-2xl border-none shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-4"
      : "bg-white/75 backdrop-blur-2xl border-none shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          headerBg
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: BRAND */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center" aria-label="KamKam Anasayfa">
                {pathname === "/isletmeler" ? (
                  <Image 
                    src={isDarkTheme ? "/isletmelogo-white.svg" : "/isletmelogo.svg"}
                    alt="KamKam İşletmeler"
                    width={150}
                    height={48}
                    priority
                    className="h-10 sm:h-12 w-auto transition-all duration-300"
                  />
                ) : (
                  <Logo className={clsx("h-10 w-auto transition-colors", textColor)} />
                )}
              </Link>
            </div>

            {/* CENTER: DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                link.href === "/indir" ? (
                  <button
                    key={link.label}
                    onClick={() => setIsDownloadModalOpen(true)}
                    className={clsx(
                      "relative text-[15px] font-semibold transition-colors duration-200 group",
                      textColor,
                      hoverColor
                    )}
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={clsx(
                      "relative text-[15px] font-semibold transition-colors duration-200 group",
                      textColor,
                      hoverColor
                    )}
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                  </Link>
                )
              ))}
            </nav>

            {/* RIGHT: ACTION & LANGUAGE */}
            <div className="hidden md:flex items-center gap-6">
              
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={clsx(
                    "flex items-center gap-1.5 transition-colors group",
                    textColor,
                    hoverColor
                  )}
                  aria-label="Dil Seçimi"
                >
                  {activeLang === "TR" ? (
                    <img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" alt="TR" className="w-[18px] h-[18px] rounded-full shadow-sm border border-black/5" />
                  ) : (
                    <IconWorld size={20} stroke={1.5} />
                  )}
                  <span className="text-sm font-semibold">{activeLang}</span>
                  <IconChevronDown size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-4 w-40 bg-white border border-[#E3E7EC] shadow-xl shadow-black/5 rounded-[16px] p-1.5 z-50 flex flex-col gap-0.5"
                    >
                      {[
                        { code: "TR", label: "Türkçe", flag: "https://hatscripts.github.io/circle-flags/flags/tr.svg" },
                        { code: "EN", label: "İngilizce", isGlobe: true }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setActiveLang(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-[12px] text-[13px] font-semibold transition-colors ${
                            activeLang === lang.code ? "bg-[#D9381E]/10 text-[#D9381E]" : "text-[#37474F] hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {lang.isGlobe ? (
                              <IconWorld size={16} stroke={2} className={activeLang === lang.code ? "text-[#D9381E]" : "text-gray-500"} />
                            ) : (
                              <img src={lang.flag} alt={lang.code} className="w-4 h-4 rounded-full shadow-sm border border-black/5" />
                            )}
                            {lang.label}
                          </div>
                          {activeLang === lang.code && <IconCheck size={16} stroke={3} />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            <Magnetic strength={0.3}>
              <button data-magnetic="true" className="bg-brand text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/30">
                İşletmeni Kaydet
              </button>
            </Magnetic>
            </div>

            {/* MOBILE: HAMBURGER */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={clsx(
                  "p-2 rounded-full transition-colors",
                  textColor,
                  isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
                )}
                aria-label="Menüyü Aç"
              >
                <IconMenu2 size={24} stroke={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (Framer Motion) - MUST BE OUTSIDE HEADER TO AVOID BACKDROP-FILTER CLIPPING */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col px-4 py-6 md:hidden overflow-hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {pathname === "/isletmeler" ? (
                  <Image src="/isletmelogo.svg" alt="KamKam İşletmeler" width={150} height={40} className="h-10 w-auto" />
                ) : (
                  <Logo className="h-10 w-auto text-foreground" />
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Menüyü Kapat"
              >
                <IconX size={24} stroke={1.5} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col mt-12 gap-8 px-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {link.href === "/indir" ? (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsDownloadModalOpen(true);
                      }}
                      className="text-2xl font-semibold text-foreground hover:text-brand transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-semibold text-foreground hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Footer Actions */}
            <div className="mt-auto flex flex-col gap-6 pb-8 px-2">
              <button 
                onClick={() => setActiveLang(activeLang === "TR" ? "EN" : "TR")}
                className="flex items-center gap-3 text-foreground font-semibold"
              >
                {activeLang === "TR" ? (
                  <img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" alt="TR" className="w-6 h-6 rounded-full shadow-sm border border-black/5" />
                ) : (
                  <IconWorld size={24} stroke={1.5} />
                )}
                <span>{activeLang === "TR" ? "Türkçe / TR" : "English / EN"}</span>
              </button>
              <button className="bg-transparent border-[1.5px] border-brand text-brand py-4 rounded-full font-bold text-lg text-center transition-all duration-300 active:scale-95 active:bg-brand/5">
                İşletmeni Kaydet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
        placeName="" 
      />
    </>
  );
}
