"use client";

import { m as motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BentoBox1 from "./bento/BentoBox1";
import BentoBox2 from "./bento/BentoBox2";
import BentoBox3 from "./bento/BentoBox3";
import BentoBox4 from "./bento/BentoBox4";
import BentoBox5 from "./bento/BentoBox5";

export default function IsletmeBentoGrid() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-gray-900 overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Massive Premium Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-brand" />
            <span className="text-brand font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
              Yeni Standart
            </span>
            <span className="w-12 h-px bg-brand" />
          </div>

          <h2 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] mb-8 text-gray-900">
            Artık Kurallar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">
              Değişti.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed font-light">
            Sektörün normalleştirdiği bu kayıpları bir standart olmaktan çıkarıyoruz. 
            Mekanınızda sunduğunuz kusursuz hizmeti, <strong className="text-gray-900 font-semibold">kusursuz çalışan bir teknolojiyle</strong> taçlandırmanız için buradayız.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <button 
              onClick={() => alert("Başvuru formuna gidiliyor")}
              className="group relative flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,56,30,0.3)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Hemen Başla
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#b82a14] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Full Bleed Scroll Wrapper */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 lg:w-full lg:static lg:translate-x-0 flex overflow-x-auto snap-x snap-mandatory lg:block lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* 12.svg Recreated Bento Grid - Now acts as a very wide scrolling container on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black rounded-[2.5rem] lg:rounded-[3rem] p-4 lg:p-5 flex lg:grid lg:grid-cols-[23fr_31fr_31fr] gap-3 lg:gap-5 auto-rows-fr w-max lg:w-full shrink-0 ml-6 lg:ml-auto lg:mr-auto mr-4"
          >
            
            {/* LEFT COLUMN (Slide 1 on Mobile) */}
            <div className="flex flex-col gap-3 lg:gap-5 h-full w-[72vw] sm:w-[55vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
              <BentoBox1 />
              <BentoBox2 />
            </div>

            {/* MIDDLE COLUMN (Slide 2 on Mobile) */}
            <div className="h-full w-[72vw] sm:w-[55vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
              <BentoBox3 />
            </div>

            {/* RIGHT COLUMN (Slide 3 on Mobile) */}
            <div className="flex flex-col gap-3 lg:gap-5 h-full w-[72vw] sm:w-[55vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
              <BentoBox4 />
              <BentoBox5 />
            </div>

          </motion.div>
          
          {/* End Spacer for Mobile to allow scrolling past the black box smoothly */}
          <div className="w-[1.5rem] shrink-0 lg:hidden" />
        </div>

      </div>
    </section>
  );
}
