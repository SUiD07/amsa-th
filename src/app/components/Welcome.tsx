"use client";

import React from "react";
import WelcomeCard from "./WelcomeCard";
import { welcomeList } from "../constants/welcomeList";
// import logo from "/public/Black.png";
import Image from "next/image";
import { useLanguage } from "./LanguageContext"; // สมมติคุณมี Context นี้แล้ว
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Globe,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Stethoscope,
  Microscope,
  Palette,
  MessageSquare,
  MapPin,
} from "lucide-react";

const translations = {
  en: {
    welcome: "Welcome to AMSA-Thailand",
    deepDive: "A Deeper Dive into",
    ourOrganization: "Our Organization",
    whether:
      "Whether you’re a medical student seeking international clinical experience or have heard of AMSA Thailand before, today we’re taking you on a deeper dive into this organization.",
    amsaMore:
      "AMSA is more than just a community of medical students—it’s a gateway to learning, development, and global networking!",
    intro:
      "Whether you’re a medical student seeking international clinical experience or have heard of AMSA Thailand before, today we’re taking you on a deeper dive into this organization. AMSA is more than just a community of medical students—it’s a gateway to learning, development, and global networking! 🩺🌏🧑‍⚕️",
    title: "What is AMSA?",
    description1:
      "AMSA (The Asian Medical Students' Association) is an international network of medical students from over 27 countries worldwide. Founded in 1985 in Manila, Philippines, it originated from the gathering of medical students discussing healthcare issues during the Indochina War.",
    description2:
      " Today, AMSA focuses on exchanging medical knowledge, promoting public health, and fostering global friendships among medical students. As a non-profit organization, it emphasizes professional growth and international collaboration.",
    visionTitle: "Vision",
    visionDesc1: "AMSA operates through three core pillars:",
    knowledge: "Knowledge",
    knowledgeDesc:
      " Encouraging both theoretical and practical learning to cultivate competent medical professionals ready for future challenges.",
    action: "Action",
    actionDesc:
      "Emphasizing community engagement through activities that benefit society and improve public health.",
    friendship: "Friendship",
    friendshipDesc:
      "Building connections among medical students worldwide to exchange experiences and grow together.",
    visionDesc2:
      "With these principles, AMSA provides a platform for members to learn, take action, and form lasting international relationships.",
  },
  th: {
    welcome: "ยินดีต้อนรับสู่ AMSA-Thailand",
    deepDive: "เจาะลึก",
    ourOrganization: "องค์กรของเรา",
    whether:
      "ไม่ว่าคุณจะเป็นนักศึกษาแพทย์ที่กำลังมองหาประสบการณ์ทำงานร่วมกับแพทย์นานาชาติ หรือเคยได้ยินชื่อ AMSA Thailand มาก่อนแล้ว วันนี้เราจะพาคุณมาทำความรู้จักกับองค์กรนี้ให้ลึกซึ้งยิ่งขึ้น",
    amsaMore:
      "AMSA ไม่ใช่แค่ชุมชนนักศึกษาแพทย์ แต่เป็นประตูสู่การเรียนรู้ การพัฒนา และการสร้างเครือข่ายระดับโลก!",
    intro:
      "ไม่ว่าคุณจะเป็นนักศึกษาแพทย์ที่กำลังมองหาประสบการณ์ทำงานร่วมกับแพทย์นานาชาติ หรือเคยได้ยินชื่อ AMSA Thailand มาก่อนแล้ว วันนี้เราจะพาคุณมาทำความรู้จักกับองค์กรนี้ให้ลึกซึ้งยิ่งขึ้น ว่าทำไม AMSA ถึงเป็นมากกว่าชุมชนของนักศึกษาแพทย์ แต่ยังเป็นโอกาสในการเรียนรู้ พัฒนา และสร้างเครือข่ายระดับนานาชาติ! 🩺🌏🧑‍⚕️",
    title: "AMSA คืออะไร?",
    description1:
      "AMSA (The Asian Medical Students’ Association) หรือ องค์กรนักศึกษาแพทย์แห่งเอเชีย เป็นเครือข่ายนานาชาติที่เกิดจากความร่วมมือของนักศึกษาแพทย์จากมากกว่า 30 ประเทศทั่วโลก โดยมีจุดเริ่มต้นจากการจัดงานประชุม AMSC (Asian Medical Students’ Conference) ซึ่งมาจากการรวมตัวของนักศึกษาแพทย์เพื่อหารือประเด็นทางการแพทย์ในช่วงสงครามอินโดจีนตั้งแต่ปี 1980 ต่อมาสมาชิกร่วมกันจัดตั้งองค์กร AMSA อย่างเป็นทางการในการประชุม AMSC ปี 1985 ซึ่งประเทศไทยเป็นหนึ่งในประเทศผู้ร่วมก่อตั้งทั้งเวทีประชุม AMSC และองค์กร AMSA อย่างเป็นทางการ",
    description2:
      "โดยปัจจุบัน AMSA มุ่งเน้นการแลกเปลี่ยนองค์ความรู้ทางการแพทย์ ส่งเสริมการพัฒนาสาธารณสุขในสังคม และสร้างเครือข่ายมิตรภาพระหว่างนักศึกษาแพทย์ทั่วโลก ภายใต้แนวคิดที่ไม่แสวงหาผลกำไร ให้ความสำคัญกับการเติบโตและพัฒนาวิชาชีพร่วมกันระหว่างประเทศ ",
    visionTitle: "วิสัยทัศน์",
    visionDesc1: "AMSA มุ่งมั่นในการทำงานผ่าน 3 เสาหลักสำคัญ อันได้แก่",
    knowledge: "ความรู้",
    knowledgeDesc:
      "ส่งเสริมการเรียนรู้ทั้งภาคทฤษฎีและปฏิบัติ เพื่อพัฒนาแพทย์ที่มีความเป็นมืออาชีพและพร้อมรับมือกับความท้าทายในอนาคต",
    action: "การกระทำ",
    actionDesc:
      "ให้ความสำคัญกับการมีส่วนร่วมในชุมชน ผ่านกิจกรรมที่สร้างประโยชน์แก่สังคมและสนับสนุนการพัฒนาสาธารณสุข",
    friendship: "มิตรภาพ",
    friendshipDesc:
      "สร้างเครือข่ายและเสริมสร้างมิตรภาพระหว่างนักศึกษาแพทย์จากทั่วโลก เพื่อแลกเปลี่ยนประสบการณ์และเติบโตร่วมกัน ",
    visionDesc2:
      "ด้วยหลักการเหล่านี้ AMSA จึงเป็นเวทีให้สมาชิกได้เรียนรู้ ลงมือทำ และสร้างสายสัมพันธ์ระดับนานาชาติที่ยั่งยืน",
  },
};

export default function Welcome() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-amsa-light text-amsa-blue px-4 py-2 rounded-full font-bold text-xs mb-8 tracking-widest uppercase">
                {t.welcome}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                {t.deepDive}{" "}
                <span className="text-amsa-blue">{t.ourOrganization}</span>
              </h2>
              <div className="space-y-6 text-xl text-slate-600 leading-relaxed italic font-serif">
                <p>"{t.whether}"</p>
                <p className="not-italic font-sans font-bold text-slate-900">
                  {t.amsaMore}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-amsa-light rounded-[3rem] -rotate-2 z-0"></div>
              <img
                src="/39th-amsa-conference.jpg"
                alt="AMSA Thailand Deep Dive"
                className="relative z-10 rounded-[2.5rem] shadow-2xl hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* What is AMSA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                {t.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The Asian Medical Students' Association (AMSA) is a peak
                representative organization for medical students from across
                Asia, the Asia-Pacific and beyond. Founded in 1985, we have
                grown into a network of over 27 chapters worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amsa-light rounded-xl flex items-center justify-center text-amsa-blue shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Global Network</h3>
                    <p className="text-slate-500">
                      Connecting students from 27+ countries for cross-border
                      collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amsa-light rounded-xl flex items-center justify-center text-amsa-blue shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">
                      Knowledge Exchange
                    </h3>
                    <p className="text-slate-500">
                      Promoting academic excellence and research through
                      international platforms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amsa-light rounded-xl flex items-center justify-center text-amsa-blue shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Friendship</h3>
                    <p className="text-slate-500">
                      Building lifelong bonds and professional networks across
                      the globe.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/Black.png"
                alt="AMSA Students"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-amsa-blue text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">27+</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">
                  Member Chapters
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ถ้าต้องการใช้ welcomeList ก็สามารถเปิดคอมเมนต์และ map ได้ */}
      {/* {welcomeList.map((item, itemIndex) => (
        <WelcomeCard key={itemIndex} head={item.head} word={item.word} />
      ))} */}
      {/* <div className="hero rounded-3xl bg-white w-full max-w-[1000px] flex mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <p className="py-6 whitespace-pre-line">{t.intro}</p>
        </div>
      </div>
      <div className="hero rounded-3xl bg-white w-full max-w-[1000px] flex mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/Black.png"
            alt="Logo"
            width={320} // w-80
            height={200} // ใส่คร่าว ๆ ให้ผ่าน (ไม่ต้องเป๊ะ)
            className="w-80 h-auto max-w-sm rounded-lg"
          />

          <div>
            <h1 className="text-5xl font-bold">{t.title}</h1>
            <p className="py-6 px-[24px] whitespace-pre-line">
              {t.description1}
            </p>
            <br />
            <p className="py-6 px-[24px] whitespace-pre-line">
              {t.description2}
            </p>
          </div>
        </div>
      </div> */}
      {/* Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">{t.visionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.knowledge,
                desc: t.knowledgeDesc,
                icon: "📚",
              },
              {
                title: t.action,
                desc: t.actionDesc,
                icon: "⚡",
              },
              {
                title: t.friendship,
                desc: t.friendshipDesc,
                icon: "🤝",
              },
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="text-6xl font-bold text-center pt-5 pb-2">
        {t.visionTitle}
      </div>

      <div className="flex justify-center max-sm:block max-sm:space-x-0 max-sm:space-y-4">
        <div className="space-x-4">
          <div className="card bg-base-100 w-72 max-sm:mx-auto">
            <div className="card-body">
              <h2 className="card-title mx-auto">{t.knowledge}</h2>
              <p className="mx-auto">{t.knowledgeDesc}</p>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <div className="card bg-base-100 w-72 max-sm:mx-auto">
            <div className="card-body">
              <h2 className="card-title mx-auto">{t.action}</h2>
              <p className="mx-auto">{t.actionDesc}</p>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <div className="card bg-base-100 w-72 max-sm:mx-auto">
            <div className="card-body">
              <h2 className="card-title mx-auto">{t.friendship}</h2>
              <p className="mx-auto">{t.friendshipDesc}</p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
