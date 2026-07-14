"use client";

import { IconBrandApple, IconBrandGooglePlay, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6779172167";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.kamkam.app";

function PhoneMockup() {
  return (
    <div className="phone-float relative mx-auto w-[196px] sm:w-[230px] lg:w-[270px]">
      <div className="absolute -inset-8 rounded-full bg-[#FF5252]/20 blur-3xl" />
      <div className="relative aspect-[9/18.6] rounded-[2.55rem] border-[7px] border-[#171717] bg-[#111] p-1.5 shadow-[0_28px_70px_rgba(211,47,47,0.25),0_10px_28px_rgba(15,23,42,0.22)]">
        <div className="absolute left-1/2 top-2.5 z-20 h-4 w-[34%] -translate-x-1/2 rounded-full bg-[#111]" />

        <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f7f7f8]">
          <div className="bg-gradient-to-br from-[#D32F2F] to-[#FF5252] px-4 pb-5 pt-9 text-left text-white">
            <div className="flex items-center justify-between">
              <span className="text-base font-black tracking-[-0.04em] sm:text-lg">
                KamKam
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[10px] font-bold">
                EK
              </span>
            </div>
            <p className="mt-4 text-[10px] font-medium text-white/75">
              Bugün nereyi keşfediyoruz?
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[9px] font-medium text-slate-400 shadow-sm">
              <IconMapPin size={13} className="text-[#D32F2F]" />
              İstanbul&apos;da ara
            </div>
          </div>

          <div className="space-y-3 p-3 text-left">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-extrabold text-[#1A1A1A] sm:text-xs">
                Sana özel fırsatlar
              </p>
              <span className="text-[8px] font-bold text-[#D32F2F]">Tümü</span>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#1A1A1A] p-3 text-white shadow-lg">
              <div className="h-16 rounded-xl bg-[radial-gradient(circle_at_70%_30%,#ff7777_0,#d32f2f_28%,#2b0d0d_70%)] sm:h-20" />
              <p className="mt-2 text-[10px] font-bold sm:text-xs">Şehrin yeni favorileri</p>
              <p className="mt-0.5 text-[8px] text-white/55">En iyi mekanları keşfet</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white p-2 shadow-[0_5px_18px_rgba(15,23,42,0.08)]">
                <div className="h-10 rounded-lg bg-gradient-to-br from-amber-100 to-orange-300 sm:h-12" />
                <p className="mt-1.5 text-[8px] font-bold text-[#1A1A1A]">Kahve Molası</p>
                <p className="text-[7px] font-bold text-[#D32F2F]">%20 avantaj</p>
              </div>
              <div className="rounded-xl bg-white p-2 shadow-[0_5px_18px_rgba(15,23,42,0.08)]">
                <div className="h-10 rounded-lg bg-gradient-to-br from-pink-100 to-rose-300 sm:h-12" />
                <p className="mt-1.5 text-[8px] font-bold text-[#1A1A1A]">Akşam Keyfi</p>
                <p className="text-[7px] font-bold text-[#D32F2F]">2x KamPuan</p>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-3 bottom-2 flex items-center justify-around rounded-2xl bg-white/95 py-2 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D32F2F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#D32F2F] text-sm font-bold text-white">
              +
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="mx-auto w-full max-w-[380px]">
      <a
        href={APP_STORE_URL}
        className="store-button flex min-h-[66px] w-full items-center gap-4 rounded-2xl bg-black px-5 py-3.5 text-left text-white shadow-[0_12px_26px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <IconBrandApple aria-hidden="true" size={34} stroke={1.7} />
        <span className="flex flex-col">
          <span className="text-[11px] font-medium leading-tight text-white/60">
            Ücretsiz İndir
          </span>
          <span className="mt-0.5 text-[17px] font-bold leading-tight">
            App Store&apos;dan İndir
          </span>
        </span>
      </a>

      <div className="my-3 flex items-center gap-3 text-[11px] font-semibold text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        veya
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <a
        href={GOOGLE_PLAY_URL}
        className="store-button flex min-h-[66px] w-full items-center gap-4 rounded-2xl bg-[#191919] px-5 py-3.5 text-left text-white shadow-[0_12px_26px_rgba(0,0,0,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D32F2F]"
      >
        <IconBrandGooglePlay aria-hidden="true" size={32} stroke={1.7} />
        <span className="flex flex-col">
          <span className="text-[11px] font-medium leading-tight text-white/60">
            Ücretsiz İndir
          </span>
          <span className="mt-0.5 text-[17px] font-bold leading-tight">
            Google Play&apos;den İndir
          </span>
        </span>
      </a>
    </div>
  );
}

export default function IndirPage() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    const fallbackTimer = window.setTimeout(() => {
      setShowFallback(true);
    }, isIOS || isAndroid ? 2000 : 0);

    if (isIOS || isAndroid) {
      window.location.replace(isIOS ? APP_STORE_URL : GOOGLE_PLAY_URL);
    }

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  return (
    <main className="fixed inset-0 z-[10000] overflow-y-auto bg-[radial-gradient(circle_at_18%_12%,rgba(255,82,82,0.13),transparent_32%),linear-gradient(145deg,#ffffff_15%,#fff5f5_100%)] text-[#1A1A1A]">
      <div className="absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full border-[50px] border-[#D32F2F]/5" />
      <div className="absolute bottom-[-110px] left-[-100px] h-72 w-72 rounded-full bg-[#FF5252]/5 blur-2xl" />

      <div className="page-enter relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-5 py-7 sm:px-8 lg:justify-center lg:py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-black tracking-[-0.06em] text-[#D32F2F] sm:text-4xl"
            aria-label="KamKam ana sayfa"
          >
            KamKam
          </Link>
          <span className="rounded-full border border-[#D32F2F]/10 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D32F2F] shadow-sm backdrop-blur sm:text-xs">
            Şehir senin
          </span>
        </header>

        <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:py-6">
          <div className="text-center md:text-left">
            <div className="md:hidden">
              <PhoneMockup />
            </div>

            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em] text-[#D32F2F] md:mt-0">
              İstanbul&apos;u cebinde taşı
            </p>
            <h1 className="mt-3 text-[clamp(2.5rem,11vw,4.8rem)] font-black leading-[0.96] tracking-[-0.065em] text-[#1A1A1A]">
              Keşfet. Kullan. <span className="text-[#D32F2F]">Kazan.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-slate-500 sm:text-base md:mx-0 md:text-lg">
              İstanbul&apos;un en iyi işletmeleri, en iyi fırsatlar
            </p>

            <div className="mt-8 md:mx-0">
              {showFallback ? (
                <StoreButtons />
              ) : (
                <div
                  className="mx-auto flex min-h-[148px] max-w-[380px] flex-col items-center justify-center rounded-3xl border border-red-100 bg-white/70 shadow-[0_14px_38px_rgba(211,47,47,0.09)] backdrop-blur md:mx-0"
                  role="status"
                  aria-live="polite"
                >
                  <span className="h-8 w-8 animate-spin rounded-full border-[3px] border-red-100 border-t-[#D32F2F]" />
                  <p className="mt-3 text-sm font-bold text-slate-500">
                    Yönlendiriliyor...
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <PhoneMockup />
          </div>
        </div>

        <footer className="flex flex-col items-center justify-between gap-2 border-t border-red-100/80 pt-4 text-[11px] font-medium text-slate-400 sm:flex-row">
          <p>© 2025 KamKam Teknoloji</p>
          <Link href="/gizlilik" className="transition-colors hover:text-[#D32F2F]">
            Gizlilik Politikası
          </Link>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes indir-page-enter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes indir-phone-float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .page-enter {
          animation: indir-page-enter 700ms ease-out both;
        }

        .phone-float {
          animation: indir-phone-float 5s ease-in-out infinite;
        }

        .store-button {
          transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease;
        }

        .store-button:hover {
          transform: scale(1.025);
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.2);
        }

        .store-button:active {
          transform: scale(0.985);
        }

        @media (prefers-reduced-motion: reduce) {
          .page-enter, .phone-float {
            animation: none;
          }

          .store-button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
