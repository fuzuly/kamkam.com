"use client";

import { m as motion } from "framer-motion";

const questions = [
  "Kasanızdan ayrılan müşteriyi yarına rakibinize kaptırmamak için somut bir stratejiniz var mı?",
  "Her ay komisyon ödediğiniz o cihazlar, bugüne kadar kapınızdan içeri tek bir 'yeni' müşteri sokabildi mi?",
  "En sadık müşteriniz aniden gelmeyi bıraktığında, onu geri kazanacak bir sisteminiz var mı?",
  "Sosyal medyadaki o binlerce boş beğeni, günün sonunda kasanıza doğrudan nakit olarak yansıyor mu?",
  "Yüksek komisyonlu platformlara mahkum kalmadan, kendi müşteri kitlenizi özgürce yönetmek istemez misiniz?"
];

export default function IsletmeQuestions() {
  return (
    <section data-theme="dark" className="relative w-full py-24 md:py-40 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="w-8 h-px bg-brand" />
                <h2 className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-brand">
                  Farklı Düşün
                </h2>
              </div>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05]">
                Gerçeklerle <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
                  Yüzleşme Vakti.
                </span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-md font-medium leading-relaxed pb-2">
              Sistem sizi sadece komisyon ödeyen bir durağa dönüştürmeden önce, kontrolü elinize alın.
            </p>
          </div>
        </motion.div>

        {/* Sticky Card Stack */}
        <div className="relative w-full pb-32">
          {questions.map((q, index) => (
            <div
              key={index}
              className="sticky flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full p-8 sm:p-10 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10"
              style={{
                top: `calc(15vh + ${index * 30}px)`,
                backgroundColor: `hsl(0, 0%, ${6 + index * 1.5}%)`, // Slightly lighter background for each card to create depth
                zIndex: index,
                marginBottom: '40px' // Spacing before the next card scrolls into view
              }}
            >
              {/* Massive Number */}
              <div className="text-[4rem] md:text-[7rem] font-black text-white/5 leading-none shrink-0 pointer-events-none select-none">
                0{index + 1}
              </div>
              
              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.3] md:leading-[1.3] tracking-tight text-gray-200">
                {q}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
