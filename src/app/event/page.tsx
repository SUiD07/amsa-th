"use client";

import Navbar from "../components/Navbar";
import NewEvent from "../components/NewEvent";
import Event from "../components/Event";
export default function Home() {
  return (
    <main className="font-ibm">
      <Navbar />
      {/* Header */}
      <section className="bg-amsa-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Activities
          </h1>
          <p className="text-xl text-red-100">
            Discover what's happening in AMSA-Thailand.
          </p>
        </div>
      </section>
      <NewEvent />
      <Event />
    </main>
  );
}
