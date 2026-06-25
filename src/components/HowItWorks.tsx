"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    num: "01",
    title: "Şehri Keşfetmeye Başlayın",
    desc: "Saniyeler içinde profilinizi oluşturun ve sizin için anlaştığımız işletmelerden oluşan KamKam ağına adım atın. Karmaşık kayıt süreçleri veya cüzdan şişiren plastik kartlar yok; sadece size özel fırsatlarla dolu yepyeni bir şehir deneyimi var."
  },
  {
    num: "02",
    title: "Sadece Okutun",
    desc: "Tam ihtiyacınız olan işletmeyi bulun ve keyfini çıkarın. Kasaya geldiğinizde telefon numaranızı söylemekle veya form doldurmakla uğraşmayın. Sadece telefonunuzdaki QR kodu gösterin ve saniyeler içinde puanınızı cebinize koyun."
  },
  {
    num: "03",
    title: "Özgürce Harcayın, Kendinizi Şımartın",
    desc: "Biriken puanlarınızı KamKam ağındaki tüm mekanlarda dilediğiniz gibi harcayın. Kazandığınız ödüller tek bir işletmeye bağlı kalmaz; kahve içerken kazandığınız puanla bir sonraki gün başka bir mekanda kendinizi şımartın. Şehrin tadını ayrıcalıklı çıkarın."
  }
];

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section className="relative w-full bg-background" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* LEFT SIDE: STICKY HEADER */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-40 z-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mb-8 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 w-full"
            >
              <span className="w-8 sm:w-12 h-px bg-brand" />
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-[10px] sm:text-sm text-center">Hemen Başlayın</span>
              <span className="w-8 sm:w-12 h-px bg-brand lg:hidden" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-6 sm:mb-8 text-center md:text-left"
            >
              Beklemek Yok. <br />
              <span className="text-slate-500">3 Adımda İçeridesiniz.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-medium mb-12 sm:mb-16 text-center md:text-left mx-auto md:mx-0"
            >
              Sadece 3 adımda dijital kimliğinizi oluşturun ve KamKam dünyasının ayrıcalıklarını yaşamaya hemen başlayın.
            </motion.p>
            
            {/* MOBİL İÇİN SCROLL PROGRESS (Sadece mobilde görünür) */}
            <div className="lg:hidden w-full max-w-[200px] h-1 bg-slate-100 rounded-full overflow-hidden mt-2 mx-auto">
              <motion.div 
                className="h-full bg-brand origin-left"
                style={{ scaleX: scrollXProgress }}
              />
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING CARDS */}
          {/* Masaüstünde: flex-col, mobilde: flex-row overflow-x-auto snap */}
          <div className="w-full lg:w-1/2 relative">
            <div 
              ref={scrollRef}
              className="flex lg:flex-col gap-6 md:gap-12 pb-12 lg:pb-32 overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{
                // Mobilde native akıcı scroll için
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {cards.map((card, idx) => (
                <div 
                  key={idx}
                  className="group relative min-w-[75vw] sm:min-w-[320px] lg:min-w-0 snap-center bg-white p-8 md:p-14 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 lg:hover:shadow-2xl lg:hover:-translate-y-2 lg:hover:border-brand/20 overflow-hidden"
                >
                  {/* Dekoratif Arkaplan Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {/* Dev Rakam */}
                  <div className="absolute -top-4 -right-4 p-8 text-[120px] leading-none font-black text-slate-50 opacity-50 group-hover:text-brand/[0.03] group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                    {card.num}
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-12 h-1 bg-brand mb-8 rounded-full" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-brand transition-colors duration-500">
                        {card.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* MOBİL İÇİN KAYDIRMA İPUCU (Sağ tarafta gradient fade) */}
            <div className="lg:hidden absolute right-0 top-0 bottom-12 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

        </div>
      </div>
      
      {/* CSS For Hiding Scrollbar within this component scope */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
