import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KamKam | B2B2C Sadakat ve Veri Ekosistemi",
  description: "Donanımsız sadakat ve B2B2C veri ekosistemi. Şehri telefonunla keşfet, özenle seçilmiş işletmeler ve sınırsız ayrıcalıklara ulaş.",
  keywords: ["Sadakat Programı", "B2B2C", "Veri Ekosistemi", "Şehir Rehberi", "KamKam", "Avantaj", "Müşteri Sadakati"],
  authors: [{ name: "KamKam" }],
  openGraph: {
    title: "KamKam | Şehir Artık Cebinizde",
    description: "Yüzlerce seçkin işletme, kişiselleştirilmiş ayrıcalıklar ve sınır tanımayan ödüller. Şehri yepyeni, elit bir boyutta deneyimleyin.",
    url: "https://kamkam.com.tr",
    siteName: "KamKam",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KamKam | B2B2C Sadakat ve Veri Ekosistemi",
    description: "Şehri telefonunla keşfet. Özenle seçilmiş işletmeler, sınırsız ayrıcalık.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ED1B24", // KamKam Brand Red
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased overflow-x-clip w-full relative`}>
        <Preloader />
        <MotionProvider>
          <SmoothScroll>
            <div className="relative w-full flex flex-col min-h-screen">
              <Header />
              {children}
            </div>
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
