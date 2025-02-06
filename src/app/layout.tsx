import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
export const metadata: Metadata = {
  title: "AMSA-Thailand",
  description: "The Asian Medical Students’ Association of Thailand",
  icons:{
    icon:"/Black.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${ibmPlexSansThai.variable} antialiased`}
      >
        {/* <header>
          <Navbar />
        </header> */}
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
