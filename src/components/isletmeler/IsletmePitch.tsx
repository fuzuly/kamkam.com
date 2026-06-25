"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IsletmePitch() {
  return (
    <section className="relative w-full min-h-[100svh] py-20 lg:pt-28 lg:pb-12 bg-white text-gray-900 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          
          {/* Top Label (Showcase Style) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-brand" />
            <span className="text-brand font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
              Yeni Müşteri Değil, Kalite
            </span>
            <span className="w-12 h-px bg-brand" />
          </div>

          {/* Massive Typography Title */}
          <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 lg:mb-10 text-gray-900">
            Şehrin Enerjisini <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">
              İçeri Davet Edin.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-xl text-gray-500 mb-14 lg:mb-16 max-w-2xl lg:max-w-[800px] leading-relaxed font-light">
            Diğer seçkin mekanlarda oluşan elit harcama kültürünü doğrudan kendi işletmenize yönlendirin. 
            Doğru kitle zaten dışarıda; onları kusursuzca içeri almanın en zarif yolu <strong className="text-gray-900 font-semibold">KamKam</strong>.
          </p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <button 
              onClick={() => alert("İşletme başvurusu modalı açılacak")}
              className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                İşletme Olarak Katıl
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
