"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "KamKam sıradan bir indirim veya fırsat uygulaması mı?",
    answer: "Hayır. KamKam markanızı ucuzlatan sıradan indirim veya fırsat platformlarından tamamen farklıdır. Müşteri kitlenizi özenle seçilmiş, kaliteli hizmeti takdir eden kullanıcılardan oluşturur ve işletmenizin prestijini artıracak bir sadakat ekosistemi sunar."
  },
  {
    id: 2,
    question: "Kasa sırasında kod söylemek veya kart göstermek zorunda mıyım?",
    answer: "Kesinlikle hayır. KamKam'ın görünmez teknolojisi sayesinde kasada ekstra hiçbir fiziksel kart göstermenize veya kod söylemenize gerek kalmaz. Sadece telefonunuzu okutarak tüm işlemlerinizi saniyeler içinde, pürüzsüz bir şekilde tamamlarsınız."
  },
  {
    id: 3,
    question: "İşletmeme yeni bir POS cihazı veya kablolu donanım kurulacak mı?",
    answer: "Herhangi bir donanım karmaşasına son verdik. Kasanızı yoran, ekstra bakım gerektiren hantal POS cihazları veya kablolu donanımlara ihtiyacınız yok. Sisteme anında, dijital olarak entegre olabilir ve saniyeler içinde kullanmaya başlayabilirsiniz."
  },
  {
    id: 4,
    question: "Sisteme dahil olup kullanmaya başlamak ne kadar zamanımı alır?",
    answer: "Dakikalar içinde. Karmaşık başvuru süreçleri, haftalarca süren onay aşamaları veya teknik entegrasyon bekleme süreleri yoktur. Formu doldurduğunuz an sistem altyapınız oluşturulur ve hemen müşterilerinizi ağırlamaya başlayabilirsiniz."
  },
  {
    id: 5,
    question: "İşletme ve müşteri verilerim uygulamanın içinde ne kadar güvende?",
    answer: "Güvenlik en büyük önceliğimizdir. Tüm verileriniz uluslararası standartlarda, uçtan uca şifrelemeyle korunur. Müşteri verileriniz asla 3. taraflarla paylaşılmaz ve sadece sizin işletmenizin büyümesi için izole bir şekilde saklanır."
  }
];

export default function NedirFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      className="relative w-full py-24 md:py-32 bg-black text-white overflow-hidden z-10"
      data-theme="dark"
    >
      
      {/* Abstract ambient glows */}
      <div className="absolute top-[20%] left-[5%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* KamKam Akademi Logo Typography */}
          <div className="inline-flex items-center justify-center gap-2 mb-8">
            <Image 
              src="/akademilogo.svg" 
              alt="KamKam Akademi" 
              width={240} 
              height={60} 
              className="w-auto h-10 sm:h-12 object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Sorular ve Cevaplar
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Soru işaretlerinin yerini mutlak güvene bıraktığı nokta. Sistemin arka planındaki o tıkır tıkır işleyen yapıyı tüm netliğiyle keşfedin.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* 
                  The base of the accordion item. 
                  Dark when closed, but the inner content becomes bright white when opened.
                */}
                <div 
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 border ${
                    isOpen 
                      ? "border-white/20 bg-white" 
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleOpen(faq.id)}
                    className="w-full text-left px-8 py-6 md:py-8 flex items-center justify-between gap-6 relative z-20"
                  >
                    <h3 className={`text-lg md:text-xl font-semibold tracking-tight pr-8 transition-colors duration-300 ${isOpen ? "text-black" : "text-white"}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-black text-white" : "bg-white/10 text-white"}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expandable Content (White Base) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                      >
                        {/* Divider Line */}
                        <div className="w-[calc(100%-4rem)] mx-auto h-px bg-black/10" />
                        
                        <div className="px-8 pb-8 pt-6">
                          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
