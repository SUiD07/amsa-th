"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";
import Glide from "./components/Glide";
import Team from "./components/Team";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  // Globe,
  // BookOpen,
  // Users,
  // HeartPulse,
  // Stethoscope,
  // Microscope,
  // Palette,
  // MessageSquare,
  // MapPin,
} from "lucide-react";

const translations = {
  en: { greeting: "Hello", description: "Welcome to our website!" },
  th: { greeting: "สวัสดี", description: "ยินดีต้อนรับสู่เว็บไซต์ของเรา!" },
};

function Content() {
  const { lang } = useLanguage();

  return (
    <section className="text-center my-8">
      {/* <h1 className="text-4xl font-bold">{translations[lang].greeting}</h1>
      <p className="text-lg">{translations[lang].description}</p> */}
    </section>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <main className="font-ibm">
        <Navbar />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            width: "100vw",
          }}
        >
          {/* High-Impact Formal Hero */}
          <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
              <img
                src="https://picsum.photos/seed/amsa-hero/1920/1080?grayscale"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              {/* Decorative shapes */}
              <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amsa-blue/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amsa-blue/5 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-amsa-blue text-white px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-lg shadow-amsa-blue/20">
                      Established 1985
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[0.95] tracking-tight">
                      Empowering <br />
                      <span className="italic text-amsa-blue">
                        Future Leaders
                      </span>{" "}
                      <br />
                      in Medicine.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
                      The peak representative organization for Thai medical
                      students, fostering a global network of excellence,
                      academic growth, and social responsibility.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <Link
                        href="/event"
                        className="group bg-amsa-blue hover:bg-red-900 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-amsa-blue/20 flex items-center justify-center gap-3"
                      >
                        Explore Our Events
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        href="/about"
                        className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                      >
                        Learn Our History
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-4 hidden lg:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute  bg-amsa-blue/20 rounded-[4rem] blur-2xl"></div>
                    {/* <div className="relative bg-slate-800/50 backdrop-blur-3xl border border-white/10 p-2 rounded-[3.5rem] shadow-2xl overflow-hidden"> */}
                      <img
                        // src="https://picsum.photos/seed/medical-student/600/800?grayscale"
                        src="/white.png"
                        alt="Medical Student"
                        className="rounded-[3rem] w-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {/* <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                        <div className="text-amsa-blue font-bold text-xs uppercase tracking-widest mb-2">
                          Member Spotlight
                        </div>
                        <div className="text-white font-serif text-lg leading-tight">
                          "Connecting Thailand to the global medical community."
                        </div>
                      </div> */}
                    {/* </div> */}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">
                Scroll to Discover
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-amsa-blue to-transparent"></div>
            </motion.div>
          </section>
          {/* <Glide /> */}
          {/* <div style={{ backgroundColor: "white", width: "100vw" }}>
            <div id="home" className="bg-white pb-16 text-center pt-14">
              <div className="text-4xl lg:text-6xl font-bold pt-5 max-md:text-3xl">
                AMSA
              </div>
              <div className="text-4xl lg:text-6xl font-bold max-md:text-3xl">
                ASIAN MEDICAL STUDENTS' <br className="md:hidden" />
                ASSOCIATION OF THAILAND
              </div>
              <br />
            </div>
          </div> */}
        </div>

        {/* แสดงข้อความตามภาษาที่เลือก */}
        <Content />

        <section id="welcome">
          <Welcome />
        </section>
        <section id="resources">
          <NewEvent />
          <Event />
        </section>
        <section id="teams">
          <Team />
        </section>
        {/* <Footer /> */}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
