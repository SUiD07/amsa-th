"use client";
import { link } from "fs";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext"; // ปรับ path ตามโปรเจกต์คุณ
import { title } from "process";

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
      text: "AMCo (Community Outreach)",
      image: "/image/logo.png",
      link: "https://www.instagram.com/amsep_thailand",
      desc: `Advocates for public service and raises awareness on health issues locally and globally.`,
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
      text: "AMCo (Community Outreach)",
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
  ],
};
const TitleFlexList = {
  en: {
    title: "AMSA-Thailand Structure",
    desctitle:
      "AMSA-Thailand operates through seven main departments, working together to enhance the organization and enrich member experiences:",
    minidesc1: "In addition to its core departments, AMSA-Thailand has subunits that enhance its organizational strength:",
    minidesc2:
      "Each unit plays a crucial role in AMSA-Thailand’s academic, administrative, and global networking success.",
    },
  th: {
    title: "โครงสร้าง AMSA-Thailand",
    desctitle:
      "AMSA-Thailand ดำเนินงานผ่าน 9 หน่วยงานหลัก ที่ทำงานร่วมกันเพื่อพัฒนาองค์กรและส่งเสริมประสบการณ์ของสมาชิก ได้แก่",
    minidesc1: "นอกจากโครงสร้างหลัก AMSA-Thailand ยังมีหน่วยงานย่อยที่ช่วยเสริมสร้างความแข็งแกร่งให้กับองค์กรในด้านต่าง ๆ ได้แก่",
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

}
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
    <ul className="list bg-base-100 rounded-box shadow-md">
      <div className="p-4 pb-2 text-xs tracking-wide">
        <div className="ml-4 mr-4 mb-4 pt-5 pb-5 bg-[#720606] items-center shadow-lg rounded-md">
          <h2 className="text-lg font-bold text-white ml-5 mt-5">
            {title.title}
          </h2>
          <p className=" text-white ml-5 mt-2">
            {title.desctitle}
          </p>
          <ul>
            {teams.map((actitem, actindex) => (
              <li className="list-row" key={actindex}>
                <div className="space-y-2 my-4 mx-4 px-2 py-2 bg-rose-50 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        src={actitem.image}
                        alt={`Team ${actindex + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="32px"
                      />
                    </div>
                    <a href={actitem.link} className="text-sm font-semibold">
                      {actitem.text}
                    </a>
                  </div>
                  <p className="text-xs px-11">{actitem.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className=" text-white ml-5 mt-2">
            {title.minidesc1}
          </p>
          <ul>
            {MiniTitle.map((miniitem, miniindex) => (
              <li className="list-row" key={miniindex}>
                <div className="space-y-2 my-4 mx-4 px-2 py-2 bg-rose-50 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        src={miniitem.image}
                        alt={`MiniTitle ${miniindex + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="32px"
                      />
                    </div>
                    <a href={miniitem.link} className="text-sm font-semibold">
                      {miniitem.text}
                    </a>
                  </div>
                  <p className="text-xs px-11">{miniitem.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className=" text-white ml-5 mt-2">
            {title.minidesc2}
          </p>
        </div>
      </div>
    </ul>
  );
};

export default TeamsFlex;
