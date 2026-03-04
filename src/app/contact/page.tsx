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
  ShieldCheck,
  Landmark,
  Users2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  en: {
    badge: "Official Communication",
    titlePrefix: "Contact",
    // titleItalic: "National Board",
    heroDesc: "Asian Medical Students' Association of Thailand ",
    channelTitle: "Official Channels",
    emailTitle: "Email",
    emailDesc: "For general inquiries and official correspondence.",
    locationTitle: "Location",
    locationDesc:
      "Bangkok, Thailand - Supporting 20+ Medical School Chapters Nationwide",
    verificationTitle: "Digital Verification",
    verificationDesc:
      "Please verify our digital presence through these verified channels.",
    fbLabel: "Official Facebook Page",
    igLabel: "Official Instagram",
    internationalTitle: "International Liaison",
    internationalDesc:
      "AMSA-Thailand is a constituent member of AMSA International. For matters concerning the regional board or other national chapters:",
    visitInt: "Visit AMSA International",
  },
  th: {
    badge: "ช่องทางติดต่อทางการ",
    titlePrefix: "ติดต่อเรา",
    // titleItalic: "คณะกรรม",
    heroDesc: "Asian Medical Students' Association of Thailand ",
    channelTitle: "ช่องทางการติดต่อหลัก",
    emailTitle: "อีเมล",
    emailDesc: "สำหรับการติดต่อทั่วไปและงานเอกสารทางการ",
    locationTitle: "สถานที่",
    locationDesc:
      "กรุงเทพมหานคร - สนับสนุนเครือข่ายโรงเรียนแพทย์กว่า 20 สถาบันทั่วประเทศ",
    verificationTitle: "การยืนยันตัวตน",
    verificationDesc: "โปรดตรวจสอบตัวตนของเราผ่านช่องทางที่ได้รับการรับรอง",
    fbLabel: "Official Facebook Page",
    igLabel: "Official Instagram",
    internationalTitle: "ช่องทางติดต่อระดับสากล",
    internationalDesc:
      "AMSA-Thailand เป็นสมาชิกสมทบของ AMSA International หากท่านมีประเด็นที่ต้องการประสานงานกับคณะกรรมการระดับภูมิภาคหรือประเทศสมาชิกอื่นๆ:",
    visitInt: "เยี่ยมชมเว็บไซต์ AMSA International",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Navbar />
      <div className="pb-20 bg-white">
        {/* Header */}
        <section className="relative py-32 bg-slate-900 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://picsum.photos/seed/medical-professional/1920/1080?grayscale"
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
                {t.badge}
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                {t.titlePrefix}
                {/* <span className="italic text-amsa-blue">{t.titleItalic}</span> */}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {t.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-16">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
                    <span className="w-8 h-1 bg-amsa-blue"></span>
                    {t.channelTitle}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex gap-6 items-start">
                      <Mail
                        className="text-amsa-blue shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">
                          {t.emailTitle}
                        </p>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          contact.amsathailand@gmail.com
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {t.emailDesc}
                        </p>
                      </div>
                    </div>
                    {/* <div className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-50 text-amsa-blue rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                          <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">
                          Email Correspondence
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-2">
                        contact.amsathailand@gmail.com
                      </p>
                      <p className="text-sm text-slate-400">
                        For general inquiries and official correspondence.
                      </p>
                    </div> */}
                    <div className="flex gap-6 items-start">
                      <MapPin
                        className="text-amsa-blue shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">
                          {t.locationTitle}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {t.locationDesc}
                        </p>
                      </div>
                    </div>

                    {/* <div className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-50 text-amsa-blue rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                          <Landmark size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">
                          External Relations
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-2">
                        external@amsa-thailand.org
                      </p>
                      <p className="text-sm text-slate-400">
                        For institutional partnerships and sponsorships.
                      </p>
                    </div> */}

                    {/* <div className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-50 text-amsa-blue rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                          <Users2 size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">
                          Chapter Support
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-2">
                        chapters@amsa-thailand.org
                      </p>
                      <p className="text-sm text-slate-400">
                        For university chapter coordination and support.
                      </p>
                    </div> */}

                    {/* <div className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-50 text-amsa-blue rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-amsa-blue group-hover:text-white transition-all duration-300">
                          <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">
                          Academic Affairs
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-2">
                        academic@amsa-thailand.org
                      </p>
                      <p className="text-sm text-slate-400">
                        For research and academic program inquiries.
                      </p>
                    </div> */}
                  </div>
                </div>

                {/* Administrative Office */}
                {/* <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    Administrative Office
                  </h2> */}
                {/* <div className="space-y-6"> */}
                {/* <div className="flex gap-6 items-start">
                      <MapPin
                        className="text-amsa-blue shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">
                          National Headquarters
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          Bangkok, Thailand
                          <br />
                          Supporting 20+ Medical School Chapters Nationwide
                        </p>
                      </div>
                    </div> */}
                {/* <div className="flex gap-6 items-center">
                      <Phone className="text-amsa-blue shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">
                          Administrative Line
                        </p>
                        <p className="text-slate-600">
                          +66 2 XXX XXXX (Mon-Fri, 09:00 - 17:00 ICT)
                        </p>
                      </div>
                    </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>

              {/* Right Column: Digital Presence & Verification */}

              {/* Right Column */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">
                      {t.verificationTitle}
                    </h3>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                      {t.verificationDesc}
                    </p>

                    <div className="space-y-4">
                      <a
                        href="https://facebook.com/AMSAThailand"
                        target="_blank"
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-amsa-blue hover:bg-slate-50 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <Facebook
                            size={20}
                            className="text-slate-400 group-hover:text-[#1877F2]"
                          />
                          <span className="font-medium text-slate-700">
                            {t.fbLabel}
                          </span>
                        </div>
                        <Globe size={16} className="text-slate-300" />
                      </a>
                      <a
                        href="https://instagram.com/amsa_thailand"
                        target="_blank"
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-amsa-blue hover:bg-slate-50 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <Instagram
                            size={20}
                            className="text-slate-400 group-hover:text-pink-600"
                          />
                          <span className="font-medium text-slate-700">
                            {t.igLabel}
                          </span>
                        </div>
                        <Globe size={16} className="text-slate-300" />
                      </a>

                      {/* <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-4 opacity-50">
                          <MessageSquare size={20} className="text-slate-400" />
                          <span className="font-medium text-slate-700">
                            Line Official Account
                          </span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Pending
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className="bg-amsa-blue p-10 rounded-3xl text-white">
                    <h3 className="text-xl font-bold mb-4">
                      {t.internationalTitle}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {t.internationalDesc}
                    </p>
                    <a
                      href="https://amsa-international.org"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-bold border-b border-white/30 hover:border-white transition-all pb-1"
                    >
                      {t.visitInt} <Globe size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Footer */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 italic">
                Knowledge | Action | Friendship
              </h2>
              <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">
                Asian Medical Students' Association of Thailand
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
