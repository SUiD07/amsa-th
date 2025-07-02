'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";
import Glide from "./components/glide";
import Event from "./components/event";
import Newevent from "./components/Newevent";
import Team from "./components/Team";

import { LanguageProvider, useLanguage } from './components/LanguageContext';

const translations = {
  en: { greeting: 'Hello', description: 'Welcome to our website!' },
  th: { greeting: 'สวัสดี', description: 'ยินดีต้อนรับสู่เว็บไซต์ของเรา!' },
};

function Content() {
  const { lang } = useLanguage();

  return (
    <section className="text-center my-8">
      <h1 className="text-4xl font-bold">{translations[lang].greeting}</h1>
      <p className="text-lg">{translations[lang].description}</p>
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
          <Glide />
          <div style={{ backgroundColor: "white", width: "100vw" }}>
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
          </div>
        </div>

        {/* แสดงข้อความตามภาษาที่เลือก */}
        <Content />

        <section id="welcome">
          <Welcome />
        </section>
        <section id="resources">
          <Newevent />
        </section>
        <section id="teams">
          <Team />
        </section>
        {/* <Footer /> */}
      </main>
    </LanguageProvider>
  );
}
