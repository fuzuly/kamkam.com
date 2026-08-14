"use client";

import { m as motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ELIMINATED_KEYS = [
  "emptyStatistics",
  "checkoutDelays",
  "hardware",
  "discountHunters",
];

export default function NedirCompany() {
  const t = useTranslation("nedir.company");

  return (
    <section className="w-full py-24 md:py-32 bg-white text-black relative">
      
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Intro Manifesto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-black mb-8">
            {t("manifestoTitle")}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-500 leading-relaxed max-w-4xl">
            {t("manifestoDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:items-center">
          
          {/* Neleri Değiştiriyoruz? (Paradigm Shift) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-8">{t("changeTitle")}</h3>
            <div className="flex flex-col gap-6 lg:gap-5 w-full">
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                <CheckCircle2 className="w-6 h-6 text-black shrink-0 lg:mt-0.5" />
                <p className="text-lg font-semibold text-black">
                  {t("positiveChange")}
                </p>
              </div>

              {/* The Negatives we are eliminating */}
              {ELIMINATED_KEYS.map((key) => (
                <div key={key} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 opacity-50">
                  <XCircle className="w-6 h-6 text-gray-400 shrink-0 lg:mt-0.5" />
                  <p className="text-lg font-medium text-gray-500 line-through decoration-gray-300">
                    {t(`eliminated.${key}`)}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

          {/* Vizyon & Misyon */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12 items-center lg:items-start text-center lg:text-left"
          >
            
            {/* Vizyon */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                <span className="w-8 h-px bg-brand" />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-brand">
                  {t("vision.title")}
                </h3>
                <span className="w-8 h-px bg-brand lg:hidden" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-black leading-snug">
                {t("vision.description")}
              </p>
            </div>

            {/* Misyon */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                <span className="w-8 h-px bg-black/20" />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
                  {t("mission.title")}
                </h3>
                <span className="w-8 h-px bg-black/20 lg:hidden" />
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
                {t("mission.description")}
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
