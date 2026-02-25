"use client";

import Navbar from "../components/Navbar";
import NewEvent from "../components/NewEvent";
import Event from "../components/Event";
import { motion } from "motion/react";
export default function Home() {
  return (
    <main className="font-ibm">
      <Navbar />
      {/* Header */}
      <section className="relative py-32 bg-slate-900 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/medical-events/1920/1080?grayscale"
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
              Calendar of Activities
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              National <span className="italic text-amsa-blue">Events</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Official schedule of academic conferences, exchange programs, and
              public health initiatives across the kingdom.
            </p>
          </motion.div>
        </div>
      </section>
      <NewEvent />
      <Event />
    </main>
  );
}
