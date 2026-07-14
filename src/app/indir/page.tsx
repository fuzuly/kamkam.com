"use client";

import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6779172167";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.kamkam.app";

function PhoneMockup() {
  return (
    <div className="phone-float relative mx-auto w-[clamp(176px,52vw,210px)] sm:w-[240px] lg:w-[280px]">
      <div className="absolute -inset-10 rounded-full bg-white/20 blur-3xl" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] border-[5px] border-[#1a1a1a] bg-[#0a0a0a] shadow-[0_30px_70px_rgba(91,14,5,0.35),0_12px_30px_rgba(91,14,5,0.25)] sm:rounded-[2.6rem] sm:border-[6px]">
        <div className="absolute left-1/2 top-0 z-20 h-[3%] min-h-4 w-[40%] -translate-x-1/2 rounded-b-xl bg-[#1a1a1a]" />
        <Image
          src="/13.svg"
          alt="KamKam mobil uygulama ekranı"
          fill
          priority
          sizes="(max-width: 639px) 210px, (max-width: 1023px) 240px, 280px"
          className="object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08]" />
      </div>
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="mx-auto w-full max-w-[380px] md:mx-0">
      <a
        href={APP_STORE_URL}
        className="store-button flex min-h-[66px] w-full items-center gap-4 rounded-2xl bg-black px-5 py-3.5 text-left text-white shadow-[0_14px_30px_rgba(91,14,5,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <IconBrandApple aria-hidden="true" size={34} stroke={1.7} />
        <span className="flex min-w-0 flex-col">
          <span className="text-[11px] font-medium leading-tight text-white/60">
            Ücretsiz İndir
          </span>
          <span className="mt-0.5 text-[17px] font-bold leading-tight">
            App Store&apos;dan İndir
          </span>
        </span>
      </a>

      <div className="my-3 flex items-center gap-3 text-[11px] font-semibold text-white/65">
        <span className="h-px flex-1 bg-white/30" />
        veya
        <span className="h-px flex-1 bg-white/30" />
      </div>

      <a
        href={GOOGLE_PLAY_URL}
        className="store-button flex min-h-[66px] w-full items-center gap-4 rounded-2xl bg-[#191919] px-5 py-3.5 text-left text-white shadow-[0_14px_30px_rgba(91,14,5,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <IconBrandGooglePlay aria-hidden="true" size={32} stroke={1.7} />
        <span className="flex min-w-0 flex-col">
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
    <main className="fixed inset-0 z-[10000] overflow-y-auto bg-[#D8391E] text-white">
      <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full border-[50px] border-white/[0.07]" />
      <div className="pointer-events-none absolute bottom-[-130px] left-[-100px] h-80 w-80 rounded-full bg-white/[0.06] blur-2xl" />

      <div className="download-shell page-enter relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col lg:justify-center">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-white"
            aria-label="KamKam ana sayfa"
          >
            <Logo className="h-10 w-auto sm:h-12" accentColor="white" />
          </Link>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur sm:text-xs">
            Şehir senin
          </span>
        </header>

        <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:py-6">
          <div className="text-center md:text-left">
            <div className="md:hidden">
              <PhoneMockup />
            </div>

            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em] text-white/75 md:mt-0">
              İstanbul&apos;u cebinde taşı
            </p>
            <h1 className="mt-3 text-[clamp(2.5rem,11vw,4.8rem)] font-black leading-[0.96] tracking-[-0.065em] text-white">
              Keşfet. Kullan. <span className="text-white/70">Kazan.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-white/75 sm:text-base md:mx-0 md:text-lg">
              İstanbul&apos;un en iyi işletmeleri, en iyi fırsatlar
            </p>

            <div className="mt-8">
              {showFallback ? (
                <StoreButtons />
              ) : (
                <div
                  className="mx-auto flex min-h-[148px] max-w-[380px] flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-[0_16px_40px_rgba(91,14,5,0.18)] backdrop-blur md:mx-0"
                  role="status"
                  aria-live="polite"
                >
                  <span className="h-8 w-8 animate-spin rounded-full border-[3px] border-white/25 border-t-white" />
                  <p className="mt-3 text-sm font-bold text-white/80">
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

        <footer className="flex flex-col items-center justify-between gap-2 border-t border-white/20 pt-4 text-[11px] font-medium text-white/60 sm:flex-row">
          <p>© 2025 KamKam Teknoloji</p>
          <Link href="/gizlilik" className="transition-colors hover:text-white">
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

        .download-shell {
          padding-top: max(1.75rem, env(safe-area-inset-top));
          padding-right: max(1.25rem, env(safe-area-inset-right));
          padding-bottom: max(1.75rem, env(safe-area-inset-bottom));
          padding-left: max(1.25rem, env(safe-area-inset-left));
        }

        .phone-float {
          animation: indir-phone-float 5s ease-in-out infinite;
        }

        .store-button {
          transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease;
        }

        .store-button:hover {
          transform: scale(1.025);
          box-shadow: 0 18px 38px rgba(91, 14, 5, 0.38);
        }

        .store-button:active {
          transform: scale(0.985);
        }

        @media (min-width: 640px) {
          .download-shell {
            padding-right: max(2rem, env(safe-area-inset-right));
            padding-left: max(2rem, env(safe-area-inset-left));
          }
        }

        @media (min-width: 1024px) {
          .download-shell {
            padding-top: max(2.5rem, env(safe-area-inset-top));
            padding-bottom: max(2.5rem, env(safe-area-inset-bottom));
          }
        }

        @media (max-width: 767px) and (max-height: 700px) {
          .phone-float {
            width: 160px;
          }
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
