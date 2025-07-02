"use client";
import { link } from "fs";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useLanguage } from './LanguageContext'; // ปรับ path ตามโปรเจกต์คุณ

const TeamsFlexList = {
  en: [
  {
    text: "AMSEP (The Asian Medical Students' Exchange Programme)",
    image: "/image/co.jpg",
    link: "https://www.instagram.com/co_amsathailand",
    desc: `Provides opportunities for medical students to exchange international experiences. In 2024, exchange programs are held in the UK, Nepal, and Hungary. In 2023, exchanges took place in Australia, Taiwan, and Indonesia.`
  },
  {
    text: "AMSC (Academic Activities & Conferences)",
    image: "/image/mds.jpg",
    link: "https://www.instagram.com/mds_amsathailand",
    desc: "Currently updating activity information."
  },
  {
    text: "AMnD (Membership and Development)",
    image: "/image/logo.png",
    link: "https://www.instagram.com/amsa_thailand/following",
    desc: `Organizes activities to strengthen relationships among members, including events on important holidays such as Songkran and Christmas, providing opportunities for medical students from various universities to celebrate and build strong bonds.`
  },
  {
    text: "AMCo (Community Outreach)",
    image: "/image/logo.png",
    link: "https://www.instagram.com/amsep_thailand",
    desc: `International conferences: Organizes and participates in AMSC (Asian Medical Students’ Conference) and EAMSC (East Asian Medical Students’ Conference).\n
Health education: Conducted Global Health Training & Global Health Masterclass (2023) to enhance understanding of global health.\n
Awareness activities: AMSAxSCOME: Paint Your Pride (2022), an art exhibition reflecting gender diversity issues and the role of doctors in support; “Old Stories, New Generations” – activities to foster understanding of elderly life and needs, including education on elder care.`
  },
  {
    text: "AMDS (Multidisciplinary Studies Team)",
    image: "/image/logo.png",
    link: "https://www.instagram.com/amsa_thailand/following",
    desc: `Podcast “มนุดโรงบาล” – Collaboration with Faculty of Arts, Chulalongkorn University, presenting medical stories through artistic perspectives such as philosophy and drama.\n
MediLegis Debate – Academic debate with ALSA (Asian Law Students’ Association) exchanging views on medicine and law.\n
MedCase Competition – Medical business planning competition with the Faculty of Business Administration to develop management and strategic thinking skills in medicine.`
  },
  {
    text: "AMR (Research Society)",
    image: "/image/co.jpg",
    link: "https://www.instagram.com/co_amsathailand",
    desc: `JAMSA (Journal of Asian Medical Students’ Association) – A peer review platform supporting the quality of medical student research to promote knowledge development and standards in medical research.`
  }
  ],
  th: [
  {
    text: "AMSEP (The Asian Medical Students' Exchange Programme)",
    image:"/image/co.jpg",
    link:"https://www.instagram.com/co_amsathailand",
    desc:"เปิดโอกาสให้นักศึกษาแพทย์ได้แลกเปลี่ยนประสบการณ์ระดับนานาชาติ โดยในปี 2024 มีโครงการแลกเปลี่ยนที่ สหราชอาณาจักร, เนปาล และฮังการี ส่วนในปี 2023 ได้จัดโครงการแลกเปลี่ยนที่ ออสเตรเลีย, ไต้หวัน และอินโดนีเซีย"
  },
  {
    text: "AMSC (Academic Activities & Conferences) ",
    image:"/image/mds.jpg",
    link:"https://www.instagram.com/mds_amsathailand",
    desc:"อยู่ระหว่างการอัปเดตข้อมูลกิจกรรม"
  },
  {
    text: "AMnD (Membership and Development)",
    image:"/image/logo.png",
    link:"https://www.instagram.com/amsa_thailand/following",
    desc:"จัดกิจกรรมเพื่อกระชับความสัมพันธ์ระหว่างสมาชิก โดยมีกิจกรรมในวันหยุดสำคัญ เช่น งานสงกรานต์และคริสต์มาส ที่เปิดโอกาสให้นักศึกษาแพทย์จากหลากหลายมหาวิทยาลัยมาร่วมฉลองและสร้างความสัมพันธ์ที่แน่นแฟ้น"
  },
  { 
    text: "AMCo (Community Outreach",
    image:"/image/logo.png",
    link:"https://www.instagram.com/amsep_thailand",
    desc:"ประชุมระดับนานาชาติ: จัดและเข้าร่วม AMSC (Asian Medical Students’ Conference) และ EAMSC (East Asian Medical Students’ Conference) \n ให้ความรู้ด้านสาธารณสุข: จัด Global Health Training & Global Health Masterclass (2023) เพื่อเสริมสร้างความเข้าใจเกี่ยวกับสุขภาพระดับโลก \n กิจกรรมสร้างความตระหนักรู้: AMSAxSCOME: Paint Your Pride (2022) นิทรรศการศิลปะที่สะท้อนประเด็น ความหลากหลายทางเพศ และบทบาทของแพทย์ในการสนับสนุน, “รุ่นเก่าเล่าใหม่” – กิจกรรมที่สร้างความเข้าใจเกี่ยวกับ ชีวิตและความต้องการของผู้สูงอายุ พร้อมให้ความรู้เกี่ยวกับการดูแลผู้สูงวัย"
  },
  { 
    text: "AMDS (Multidisciplinary Studies Team)",
    image:"/image/logo.png",
    link:"https://www.instagram.com/amsa_thailand/following",
    desc:"Podcast “มนุดโรงบาล” – ความร่วมมือกับ คณะศิลปศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถ่ายทอดเรื่องราวทางการแพทย์ผ่านมุมมองเชิงศิลป์ เช่น ปรัชญาและการละคร \n งานโต้วาที MediLegis – การโต้วาทีเชิงวิชาการร่วมกับ ALSA (Asian Law Students’ Association) เพื่อแลกเปลี่ยนมุมมองด้านการแพทย์และกฎหมาย \n การแข่งขัน MedCase Competition – การแข่งขันวางแผนธุรกิจทางการแพทย์ร่วมกับคณะบริหารธุรกิจ เพื่อพัฒนาทักษะด้านการจัดการและการคิดเชิงกลยุทธ์ในวงการแพทย์ "
  },
  { 
    text: "AMR (Research Society)",
    image:"/image/co.jpg",
    link:"https://www.instagram.com/co_amsathailand",
    desc:"JAMSA (Journal of Asian Medical Students’ Association) แพลตฟอร์ม peer review ช่วยตรวจสอบคุณภาพงานวิจัยของนักศึกษาแพทย์ เพื่อสนับสนุนการพัฒนาองค์ความรู้และมาตรฐานงานวิจัยทางการแพทย์"
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

  const teams = TeamsFlexList[lang];
return (
<ul className="list bg-base-100 rounded-box shadow-md">
  <div className="p-4 pb-2 text-xs tracking-wide">
    <div className="ml-4 mr-4 mb-4 pt-5 pb-5 bg-[#720606] items-center shadow-lg rounded-md">
      <h2 className="text-lg font-bold text-white ml-8 mt-5">TEAM</h2>
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
                    style={{ objectFit: 'cover' }}
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
    </div>
  </div>
</ul>


  );
};

export default TeamsFlex;