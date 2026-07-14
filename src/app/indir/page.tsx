"use client";

import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6779172167";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.kamkam.app";

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
    <main className="fixed inset-0 z-[10000] flex min-h-dvh items-center justify-center overflow-y-auto bg-white px-6 py-12 text-slate-950">
      <section className="flex w-full max-w-md flex-col items-center text-center">
        <h1 className="text-5xl font-black tracking-[-0.06em] text-[#D32F2F] sm:text-6xl">
          KamKam
        </h1>

        {showFallback ? (
          <div className="mt-12 w-full" aria-live="polite">
            <p className="text-base font-medium text-slate-600">
              Uygulamayı indirmek için mağazanızı seçin.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={APP_STORE_URL}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <IconBrandApple aria-hidden="true" size={27} stroke={1.8} />
                <span>App Store&apos;dan İndir</span>
              </a>

              <a
                href={GOOGLE_PLAY_URL}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#148A3A] px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-[#107332] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#148A3A]"
              >
                <IconBrandGooglePlay
                  aria-hidden="true"
                  size={26}
                  stroke={1.8}
                />
                <span>Google Play&apos;den İndir</span>
              </a>
            </div>
          </div>
        ) : (
          <div
            className="mt-12 flex flex-col items-center"
            role="status"
            aria-live="polite"
          >
            <span className="h-8 w-8 animate-spin rounded-full border-[3px] border-red-100 border-t-[#D32F2F]" />
            <p className="mt-4 text-base font-medium text-slate-600">
              Yönlendiriliyor...
            </p>
          </div>
        )}

        <p className="mt-12 text-sm text-slate-400">
          KamKam - Keşfet. Kullan. Kazan.
        </p>
      </section>
    </main>
  );
}
