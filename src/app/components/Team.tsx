"use client";
import { link } from "fs";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext"; // ปรับ path ตามโปรเจกต์คุณ
import { title } from "process";
import { motion } from "motion/react";
import { ChevronRight, Users, Shield, Globe, BookOpen, Heart, Zap, Award, Target, Layout } from "lucide-react";

const TeamsFlexList = {
  en: [
    {
      text: "AMSEP (The Asian Medical Students' Exchange Programme)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: `Manages medical student exchange programs for preclinical and clinical levels, fostering international learning and cultural exchange.`,
    },
    {
      text: "AMSC (Academic Activities & Conferences)",
      image: "/image/mds.jpg",
      link: "https://www.instagram.com/mds_amsathailand",
      desc: " Promotes learning through conferences, academic activities, and medical competitions.",
    },
    {
      text: "AMnD (Membership and Development)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsa_thailand/following",
      desc: `Creates a supportive and friendly environment within AMSA and strengthens member relationships.`,
    },
    {
      text: "PGH (Public and Global Health Team of AMSA-Thailand)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsep_thailand",
      desc: "Advancing community service and enhancing public health consciousness on a local and international scale.",
    },
    {
      text: "AMDS (Multidisciplinary Studies Team)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsa_thailand/following",
      desc: `Encourages interdisciplinary collaboration to expand medical students' knowledge.
`,
    },
    {
      text: "AMR (Research Society)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: `Supports medical education research, providing opportunities for students to explore, develop new knowledge, and exchange ideas to improve medical education.
`,
    },
    {
      text: "AMB (Branding)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsa_thailand/following",
      desc: "AMB (Branding) – Manages AMSA-Thailand’s image and identity, ensuring national and international recognition.",
    },
    {
      text: "AMC (Corporate Identity & Communications)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: `Oversees internal and external communication, maintaining clear and effective messaging.
`,
    },
    {
      text: "AML (AMSA Local Chapter)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "To organize health promotions, academic activities, and community services, while offering members access to AMSA conferences and international exchanges.",
    },
  ],
  th: [
    {
      text: "Core EB (Core Executive Committee) ",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "กำหนดทิศทางและขับเคลื่อนการเติบโตขององค์กร เพื่อให้บรรลุเป้าหมายและวิสัยทัศน์ของ AMSA",
    },
    {
      text: "AMSEP (The Asian Medical Students' Exchange Programme)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "ดูแลและจัดการโครงการแลกเปลี่ยนนักศึกษาแพทย์ทั้งระดับพรีคลินิกและคลินิก เพื่อเปิดโอกาสให้สมาชิกได้เรียนรู้และแลกเปลี่ยนวัฒนธรรมกับเครือข่ายนานาชาติ  ",
    },
    {
      text: "AMSC (Academic Activities & Conferences) ",
      image: "/image/mds.jpg",
      link: "https://www.instagram.com/mds_amsathailand",
      desc: "ส่งเสริมการเรียนรู้และพัฒนาองค์ความรู้ผ่านการประชุม กิจกรรมเชิงวิชาการ และการแข่งขันด้านการแพทย์ ",
    },
    {
      text: "AMnD (Membership and Development)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsa_thailand/following",
      desc: " สร้างสภาพแวดล้อมที่ดีและเป็นมิตรภายในองค์กร พร้อมจัดกิจกรรมเสริมสร้างความสัมพันธ์ระหว่างสมาชิก ",
    },
    {
      text: "PGH (Public and Global Health Team of AMSA-Thailand)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsep_thailand",
      desc: "ส่งเสริมการบริการสังคมและสร้างความตระหนักรู้ด้านสุขภาวะทั้งในระดับท้องถิ่นและระดับโลก  ",
    },
    {
      text: "AMDS (Multidisciplinary Studies Team)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsa_thailand/following",
      desc: "สนับสนุนการทำงานร่วมกันระหว่างศาสตร์อื่น ๆ เพื่อบูรณาการความรู้และขยายขอบเขตการเรียนรู้ของนักศึกษาแพทย์ ",
    },
    {
      text: "AMR (Research Society)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "ส่งเสริมและพัฒนางานวิจัยด้านการศึกษาแพทย์ เปิดโอกาสให้นักศึกษาแพทย์ได้มีส่วนร่วมในการศึกษาค้นคว้า พัฒนาองค์ความรู้ใหม่ และแลกเปลี่ยนแนวคิดเพื่อยกระดับการเรียนการสอนทางการแพทย์ ",
    },
    {
      text: "AMB (Branding)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "ดูแลภาพลักษณ์และอัตลักษณ์ของ AMSA-Thailand สร้างความเป็นที่รู้จักและสื่อสารจุดยืนขององค์กรผ่านช่องทางต่าง ๆ เพื่อให้ AMSA เป็นที่ยอมรับในระดับประเทศและนานาชาติ",
    },
    {
      text: "AMC (Corporate Identity & Communications)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "กำกับดูแลการสื่อสารภายในและภายนอกองค์กร สร้างมาตรฐานในการนำเสนอข้อมูลข่าวสาร เพื่อให้การสื่อสารของ AMSA มีเอกลักษณ์ที่ชัดเจนและเข้าถึงกลุ่มเป้าหมายอย่างมีประสิทธิภาพ",
    },
    {
      text: "AML (AMSA Local Chapter)",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "จัดกิจกรรมส่งเสริมสุขภาพ ดำเนินกิจกรรมทางวิชาการและบริการชุมชน เปิดโอกาสให้สมาชิกเข้าร่วมการประชุมและโครงการแลกเปลี่ยนของ AMSA ",
    },
  ],
};
const TitleFlexList = {
  en: {
    title: "AMSA-Thailand Structure",
    desctitle:
      "AMSA-Thailand operates through seven main departments, working together to enhance the organization and enrich member experiences:",
    minidesc1:
      "In addition to its core departments, AMSA-Thailand has subunits that enhance its organizational strength:",
    minidesc2:
      "Each unit plays a crucial role in AMSA-Thailand’s academic, administrative, and global networking success.",
  },
  th: {
    title: "โครงสร้าง AMSA-Thailand",
    desctitle:
      "AMSA-Thailand ดำเนินงานผ่าน 9 หน่วยงานหลัก ที่ทำงานร่วมกันเพื่อพัฒนาองค์กรและส่งเสริมประสบการณ์ของสมาชิก ได้แก่",
    minidesc1:
      "นอกจากโครงสร้างหลัก AMSA-Thailand ยังมีหน่วยงานย่อยที่ช่วยเสริมสร้างความแข็งแกร่งให้กับองค์กรในด้านต่าง ๆ ได้แก่",
    minidesc2:
      "หน่วยงานทุกหน่วยจึงมีความสำคัญเป็นอย่างยิ่ง ในการสนับสนุนและพัฒนา AMSA-Thailand ให้เติบโตอย่างมั่นคง ทั้งในแง่วิชาการ การบริหาร และการขยายเครือข่ายในระดับสากล",
  },
};
const MiniFlexList = {
  th: [
    {
      text: "System Support",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "ดูแลและพัฒนาระบบภายในองค์กรให้มีความเสถียรและมีประสิทธิภาพ รองรับการทำงานของหน่วยงานต่าง ๆ ใน AMSA-Thailand เพื่อให้การดำเนินงานเป็นไปอย่างราบรื่น",
    },
    {
      text: "Partnership",
      image: "/image/mds.jpg",
      link: "https://www.instagram.com/mds_amsathailand",
      desc: "ขยายเครือข่ายความร่วมมือกับองค์กรและสถาบันต่าง ๆ ทั้งในและต่างประเทศ เพื่อเสริมสร้างโอกาสในการเรียนรู้ แลกเปลี่ยน และพัฒนาโครงการร่วมกัน",
    },
  ],
  en: [
    {
      text: "System Support",
      image: "/image/co.jpg",
      link: "https://www.instagram.com/co_amsathailand",
      desc: "Develops and maintains organizational systems for smooth operations.",
    },
    {
      text: "Partnership",
      image: "/image/mds.jpg",
      link: "https://www.instagram.com/mds_amsathailand",
      desc: "Expands collaborations with local and international organizations to foster learning and project development.",
    },
  ],
};
const TeamsFlex: React.FC = () => {
  const { lang } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // หรือแสดง loading placeholder
  }
  const MiniTitle = MiniFlexList[lang];
  const title = TitleFlexList[lang];
  const teams = TeamsFlexList[lang];
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-amsa-light text-amsa-blue px-4 py-1.5 rounded-full font-bold text-[10px] mb-6 tracking-[0.2em] uppercase border border-amsa-blue/10">
                <Award className="w-3 h-3" />
                Organization
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-serif tracking-tight leading-tight">
                AMSA-Thailand <br />
                <span className="text-amsa-red italic">Structure</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Our organization is powered by specialized teams, each dedicated
                to a unique aspect of medical student life and professional
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img
                      src={`https://picsum.photos/seed/member${i}/100/100`}
                      alt="Member"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-amsa-red flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  +50
                </div>
              </div>
            </motion.div>
          </div>


          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amsa-red/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amsa-blue/5 rounded-full blur-3xl -z-10" />


            <div className="bg-amsa-blue/90 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
              <div className="p-1 md:p-2">
                <div className="bg-amsa-red rounded-[1.4rem] p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, rose-50/70 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                  />


                  <div className="relative z-10">
                    <div className="mb-12">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif italic">
                        {title.title}
                      </h3>
                      <p className="text-rose-100/80 text-lg max-w-2xl">
                        {title.desctitle}
                      </p>
                    </div>


                    {/* Teams Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                      {teams.map((actitem, index) => (
                        <motion.a
                          key={index}
                          href={actitem.link}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="group block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="flex items-start gap-5">

                            <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-white/20">
                              <Image
                                src={actitem.image}
                                alt={actitem.text}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-lg leading-tight group-hover:text-rose-200 transition-colors">
                                  {actitem.text}
                                </h4>
                              </div>
                              <p className="text-sm text-rose-50/70 leading-relaxed">
                                {actitem.desc}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>


                    {/* Supporting Committees Section */}
                    <div className="pt-12 border-t border-white/10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-grow bg-white/10" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-200/60 whitespace-nowrap">
                          {title.minidesc1}
                        </span>
                        <div className="h-px flex-grow bg-white/10" />
                      </div>


                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {MiniTitle.map((miniitem, index
                          , miniindex) => (
                          <motion.a
                            key={index}
                            href={miniitem.link}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-5 transition-all"
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <div className="relative w-10 h-10 rounded-lg bg-white/10 flex-shrink-0 overflow-hidden">
                                <Image
                                  src={miniitem.image}
                                  alt={miniitem.text}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <h5 className="font-bold text-sm group-hover:text-rose-200 transition-colors">
                                {miniitem.text}
                              </h5>
                            </div>
                            <p className="text-xs text-rose-100/50 leading-relaxed">
                              {miniitem.desc}
                            </p>
                          </motion.a>
                        ))}
                      </div>


                      <div className="mt-16 text-center">
                        <p className="text-rose-200/60 text-sm italic font-serif">
                          {title.minidesc2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamsFlex;
