"use client";

import { motion } from "motion/react";
import { Target, Eye, History, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/medical-about/1920/1080?grayscale"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-amsa-blue text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
              Corporate Identity
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              About <span className="italic text-amsa-blue">AMSA-Thailand</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              The peak representative organization for medical students in
              Thailand, fostering international collaboration, academic
              excellence, and social responsibility.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="pt-20">
        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 rounded-3xl"
              >
                <div className="w-16 h-16 bg-amsa-blue text-white rounded-2xl flex items-center justify-center mb-8">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To provide a platform for Thai medical students to engage in
                  international exchange, academic development, and public
                  health initiatives, while building a strong network of future
                  healthcare leaders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 rounded-3xl"
              >
                <div className="w-16 h-16 bg-amsa-blue text-white rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the leading organization that empowers Thai medical
                  students to become globally competent healthcare professionals
                  who are socially responsible and internationally connected.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Our History
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-amsa-blue/20"></div>

              {[
                {
                  year: "1985",
                  title: "AMSA Founded",
                  desc: "AMSA was established in Manila, Philippines, with Thailand as one of the founding members.",
                },
                {
                  year: "1990s",
                  title: "Expansion",
                  desc: "AMSA-Thailand grew its network to include more medical schools across the country.",
                },
                {
                  year: "2000s",
                  title: "Digital Era",
                  desc: "Implementation of digital platforms to connect students and streamline exchange programs.",
                },
                {
                  year: "Present",
                  title: "Leading Network",
                  desc: "AMSA-Thailand now represents thousands of medical students across 20+ medical schools.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 mb-16 ${idx % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-amsa-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div
                    className={`w-1/2 bg-white p-8 rounded-2xl shadow-sm ${idx % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="text-amsa-blue font-bold text-2xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* International Affiliation */}
        <section className="py-24 bg-amsa-blue text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Globe size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-8">
              International Affiliation
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              AMSA-Thailand is a proud member of the Asian Medical Students'
              Association International, connecting us with medical students
              from over 27 chapters across Asia, the Asia-Pacific, and beyond.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
