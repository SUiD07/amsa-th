import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";       // นำเข้า Navbar
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext" // นำเข้า LanguageProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets:["latin"],
  weight: ['400', '700'],
  display: 'swap'
});
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets:["latin"],
  weight: ['400', '700'],
  display: 'swap'
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "AMSA-Thailand",
  description: "The Asian Medical Students’ Association of Thailand",
  icons:{
    icon:"/Black.png",
  }
};

// **RootLayout ต้องเป็น Server Component (ห้ามมี 'use client')**
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${ibmPlexSansThai.variable} ${inter.variable} antialiased`}
      >
        {/* ครอบด้วย LanguageProvider เพื่อให้ทุกคอมโพเนนต์ในแอปใช้ภาษาได้ */}
        <LanguageProvider>

          <main>{children}</main>

          {/* <footer>
            <Footer />
          </footer> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
