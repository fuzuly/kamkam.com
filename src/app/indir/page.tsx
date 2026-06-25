import Footer from "@/components/Footer";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";
import Magnetic from "@/components/Magnetic";

export default function IndirPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col pt-32">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
          Şehri Cebine İndir
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          KamKam uygulamasını hemen indirerek ayrıcalıklarla dolu şehir deneyimine ilk adımı atın.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Magnetic strength={0.2}>
            <button data-magnetic="true" className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-all duration-300">
              <IconBrandApple size={28} />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">App Store'dan</span>
                <span className="text-base leading-none">İndirin</span>
              </div>
            </button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <button data-magnetic="true" className="flex items-center gap-4 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <IconBrandGooglePlay size={28} />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Google Play'den</span>
                <span className="text-base leading-none">Edinin</span>
              </div>
            </button>
          </Magnetic>
        </div>
      </div>

      <div className="relative z-0 mt-24">
        <Footer />
      </div>
    </main>
  );
}
