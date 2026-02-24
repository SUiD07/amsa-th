"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <section className="bg-amsa-blue py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://picsum.photos/seed/contact-bg/1920/1080"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, a potential partner, or just curious about
            our work, we'd love to hear from you.
          </p>
        </div>
      </section>
      <div className="pb-20">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm"
              >
                <h2 className="text-4xl font-bold mb-12 text-slate-900">
                  Contact Information
                </h2>

                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white text-amsa-blue rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Email Us</h3>
                      <p className="text-slate-600 text-lg">
                        contact.amsathailand@gmail.com
                      </p>
                      <p className="text-slate-500">
                        General inquiries and partnerships
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white text-amsa-blue rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Call Us</h3>
                      <p className="text-slate-600 text-lg">+66 2 XXX XXXX</p>
                      <p className="text-slate-500">
                        Available Mon-Fri, 9:00 - 17:00
                      </p>
                    </div>
                  </div> */}

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white text-amsa-blue rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Our Location</h3>
                      <p className="text-slate-600 text-lg">
                        Bangkok, Thailand
                      </p>
                      <p className="text-slate-500">
                        Supporting medical students nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media & Community */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-slate-900">
                    Join the Community
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-10">
                    The best way to stay updated with our latest programs,
                    events, and opportunities is through our social media
                    channels.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a
                    href="https://facebook.com/AMSAThailand"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1877F2] text-white p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all active:scale-95 group"
                  >
                    <Facebook
                      size={48}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-xl">Facebook</div>
                      <div className="text-white/80 text-sm">AMSA-Thailand</div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/amsa_thailand"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 text-white p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all active:scale-95 group"
                  >
                    <Instagram
                      size={48}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-xl">Instagram</div>
                      <div className="text-white/80 text-sm">
                        @amsa_thailand
                      </div>
                    </div>
                  </a>

                  {/* <div className="bg-amsa-light text-amsa-blue p-8 rounded-3xl flex flex-col items-center text-center gap-4 border border-amsa-blue/10">
                    <MessageSquare size={48} />
                    <div>
                      <div className="font-bold text-xl">Line Official</div>
                      <div className="text-amsa-blue/70 text-sm">
                        Coming Soon
                      </div>
                    </div>
                  </div> */}

                  <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col items-center text-center gap-4">
                    <Globe size={48} />
                    <div>
                      <div className="font-bold text-xl">
                        AMSA International
                      </div>
                      <div className="text-white/70 text-sm">
                        amsa-international.org
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder or Visual Element */}
        <section className="h-[400px] bg-slate-100 relative overflow-hidden">
          <img
            src="https://picsum.photos/seed/bangkok-map/1920/600?grayscale"
            alt="Bangkok Map"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-center max-w-md mx-4">
              <MapPin size={48} className="text-amsa-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Based in Bangkok</h3>
              <p className="text-slate-600">
                Connecting medical students across all regions of Thailand.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
