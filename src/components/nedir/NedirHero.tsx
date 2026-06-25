"use client";

import { m as motion } from "framer-motion";

const PremiumCardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="3" />
    <line x1="2" x2="22" y1="10" y2="10" />
    <path d="M16 15h.01" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 15h.01" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const NfcWaveIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3c-2.5 3-2.5 15 0 18" />
    <path d="M10 6.5c-1.5 2.5-1.5 8.5 0 11" />
    <path d="M14 10c-.5 1.5-.5 2.5 0 4" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function NedirHero() {
  return (
    <section className="relative w-full py-16 lg:py-20 flex flex-col items-center justify-center bg-[#fafafa] text-black overflow-hidden z-10 min-h-[95vh] lg:min-h-[92vh]">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gray-200 rounded-full blur-[120px] mix-blend-multiply opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-brand/5 rounded-full blur-[120px] mix-blend-multiply opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          
          {/* Left Column: Typography & Subtext */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-16 sm:mt-24 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[4.8rem] xl:text-[5.2rem] font-extrabold tracking-tight text-black leading-[1.08] lg:leading-[1.05] mb-5 lg:mb-6">
                Bir Uygulamadan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#e64d33] to-[#b82a14] drop-shadow-sm">
                  Daha Fazlası.
                </span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base sm:text-lg font-medium leading-relaxed tracking-tight text-gray-500 max-w-md lg:max-w-lg px-4 lg:px-0">
                İyi yaşamanın ve kaliteli hizmetin ödüllendirildiği seçkin bir ekosistem. <br className="hidden md:block mb-3" />
                <span className="text-gray-900">Şehrin ritmini belirleyen mekanlarda size özel ayrıcalıkları keşfedin, deneyimin merkezinde yer alın.</span>
              </p>
            </motion.div>
          </div>

          {/* Right Column: Mobile Carousel / Desktop Stacked Cards */}
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-[2rem] p-8 lg:p-10 overflow-hidden border border-black/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-700 flex flex-col justify-between items-center lg:items-start text-center lg:text-left w-[82vw] sm:w-[320px] lg:w-full flex-shrink-0 lg:flex-shrink aspect-[4/5] sm:aspect-square lg:aspect-auto lg:min-h-[250px] snap-center"
            >
              {/* Background Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-gray-100/50 opacity-50 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center lg:items-start gap-5 lg:gap-4 mt-2 lg:mt-0">
                <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-[1rem] lg:rounded-[0.85rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-white shadow-xl shadow-black/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <PremiumCardIcon />
                </div>
                <h2 className="text-[1.75rem] sm:text-3xl font-bold tracking-tight text-black leading-[1.15] lg:leading-[1.1]">
                  Artık <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#ff6b4a]">Hak Ettiğin</span> <br />
                  Ayrıcalıklar
                </h2>
              </div>

              <p className="relative z-10 text-base lg:text-lg font-medium text-gray-500 tracking-tight mb-2 lg:mb-0">
                Her dokunuşta cebinde.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-[2rem] p-8 lg:p-10 overflow-hidden border border-black/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-700 flex flex-col justify-between items-center lg:items-start text-center lg:text-left w-[82vw] sm:w-[320px] lg:w-full flex-shrink-0 lg:flex-shrink aspect-[4/5] sm:aspect-square lg:aspect-auto lg:min-h-[250px] snap-center"
            >
              {/* Background Texture */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white via-[#fafafa] to-gray-100/50 opacity-50 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center lg:items-start gap-5 lg:gap-4 mt-2 lg:mt-0">
                <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-[1rem] lg:rounded-[0.85rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-white shadow-xl shadow-black/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <NfcWaveIcon />
                </div>
                <h2 className="text-[1.75rem] sm:text-3xl font-bold tracking-tight text-black leading-[1.15] lg:leading-[1.1]">
                  Kasada <br />
                  Sadece <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">Okut ve Çık.</span>
                </h2>
              </div>

              <p className="relative z-10 text-base lg:text-lg font-medium text-gray-500 tracking-tight leading-relaxed mb-2 lg:mb-0">
                Anında hesabına yansıt.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
