'use client';

import React from 'react';
import WelcomeCard from './WelcomeCard';
import { welcomeList } from '../constants/welcomeList';
import logo from '/public/Black.png';
import Image from 'next/image';
import { useLanguage } from "./LanguageContext"; // สมมติคุณมี Context นี้แล้ว

const translations = {
  en: {
  intro: "Whether you are a medical student seeking international experience or have heard of AMSA Thailand before, today we will take you to get to know this organization more deeply. Discover why AMSA is more than just a community of medical students—it's also an opportunity to learn, grow, and build an international network! 🩺🌏🧑‍⚕️",
  title: "What is AMSA?",
  description1: "AMSA (The Asian Medical Students’ Association) is an international network formed through the collaboration of medical students from over 30 countries around the world. It originated from the Asian Medical Students’ Conference (AMSC), which began as a gathering of medical students to discuss medical issues during the Indochina War in the 1980s. Later, members officially established AMSA at the AMSC in 1985, with Thailand being one of the founding countries for both the AMSC and the official AMSA organization.",
  description2: "Today, AMSA focuses on the exchange of medical knowledge, promoting public health development in society, and building friendships among medical students worldwide. It operates under a non-profit philosophy, emphasizing growth and professional development together across countries.",
  visionTitle: "Vision",
  visionDesc1: "AMSA is committed to working through three key pillars:",
  knowledge: "Knowledge",
  knowledgeDesc: "Promoting learning both in theory and practice to develop professional doctors who are ready to face future challenges.",
  action: "Action",
  actionDesc: "Emphasizing community involvement through activities that benefit society and support public health development.",
  friendship: "Friendship",
  friendshipDesc: "Building and strengthening networks and friendships among medical students worldwide to share experiences and grow together.",
  visionDesc2: "With these principles, AMSA serves as a platform for members to learn, take action, and build sustainable international connections."
},
  th: {
    intro:'ไม่ว่าคุณจะเป็นนักศึกษาแพทย์ที่กำลังมองหาประสบการณ์ทำงานร่วมกับแพทย์นานาชาติ หรือเคยได้ยินชื่อ AMSA Thailand มาก่อนแล้ว วันนี้เราจะพาคุณมาทำความรู้จักกับองค์กรนี้ให้ลึกซึ้งยิ่งขึ้น ว่าทำไม AMSA ถึงเป็นมากกว่าชุมชนของนักศึกษาแพทย์ แต่ยังเป็นโอกาสในการเรียนรู้ พัฒนา และสร้างเครือข่ายระดับนานาชาติ! 🩺🌏🧑‍⚕️',
    title: 'AMSA คืออะไร?',
    description1: 'AMSA (The Asian Medical Students’ Association) หรือ องค์กรนักศึกษาแพทย์แห่งเอเชีย เป็นเครือข่ายนานาชาติที่เกิดจากความร่วมมือของนักศึกษาแพทย์จากมากกว่า 30 ประเทศทั่วโลก โดยมีจุดเริ่มต้นจากการจัดงานประชุม AMSC (Asian Medical Students’ Conference) ซึ่งมาจากการรวมตัวของนักศึกษาแพทย์เพื่อหารือประเด็นทางการแพทย์ในช่วงสงครามอินโดจีนตั้งแต่ปี 1980 ต่อมาสมาชิกร่วมกันจัดตั้งองค์กร AMSA อย่างเป็นทางการในการประชุม AMSC ปี 1985 ซึ่งประเทศไทยเป็นหนึ่งในประเทศผู้ร่วมก่อตั้งทั้งเวทีประชุม AMSC และองค์กร AMSA อย่างเป็นทางการ',
    description2: 'โดยปัจจุบัน AMSA มุ่งเน้นการแลกเปลี่ยนองค์ความรู้ทางการแพทย์ ส่งเสริมการพัฒนาสาธารณสุขในสังคม และสร้างเครือข่ายมิตรภาพระหว่างนักศึกษาแพทย์ทั่วโลก ภายใต้แนวคิดที่ไม่แสวงหาผลกำไร ให้ความสำคัญกับการเติบโตและพัฒนาวิชาชีพร่วมกันระหว่างประเทศ ',
    visionTitle: 'วิสัยทัศน์',
    visionDesc1: 'AMSA มุ่งมั่นในการทำงานผ่าน 3 เสาหลักสำคัญ อันได้แก่',
    knowledge: 'ความรู้',
    knowledgeDesc: 'ส่งเสริมการเรียนรู้ทั้งภาคทฤษฎีและปฏิบัติ เพื่อพัฒนาแพทย์ที่มีความเป็นมืออาชีพและพร้อมรับมือกับความท้าทายในอนาคต',
    action: 'การกระทำ',
    actionDesc: 'ให้ความสำคัญกับการมีส่วนร่วมในชุมชน ผ่านกิจกรรมที่สร้างประโยชน์แก่สังคมและสนับสนุนการพัฒนาสาธารณสุข',
    friendship: 'มิตรภาพ',
    friendshipDesc: 'สร้างเครือข่ายและเสริมสร้างมิตรภาพระหว่างนักศึกษาแพทย์จากทั่วโลก เพื่อแลกเปลี่ยนประสบการณ์และเติบโตร่วมกัน ',
    visionDesc2: 'ด้วยหลักการเหล่านี้ AMSA จึงเป็นเวทีให้สมาชิกได้เรียนรู้ ลงมือทำ และสร้างสายสัมพันธ์ระดับนานาชาติที่ยั่งยืน',
  }
};

export default function Welcome() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      {/* ถ้าต้องการใช้ welcomeList ก็สามารถเปิดคอมเมนต์และ map ได้ */}
      {/* {welcomeList.map((item, itemIndex) => (
        <WelcomeCard key={itemIndex} head={item.head} word={item.word} />
      ))} */}
      <div className="hero rounded-3xl bg-white w-full max-w-[1000px] flex mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <p className="py-6 whitespace-pre-line">{t.intro}</p>
        </div>
      </div>
      <div className="hero rounded-3xl bg-white w-full max-w-[1000px] flex mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={logo} alt="Logo" className="max-w-sm rounded-lg w-80" />
          <div>
            <h1 className="text-5xl font-bold">{t.title}</h1>
            <p className="py-6 px-[24px] whitespace-pre-line">{t.description1}</p>
            <br/>
             <p className="py-6 px-[24px] whitespace-pre-line">{t.description2}</p>
          </div>
        </div>
      </div>

      <div className="text-6xl font-bold text-center pt-5 pb-2">{t.visionTitle}</div>

      <div className='flex justify-center max-sm:block max-sm:space-x-0 max-sm:space-y-4'>
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
      </div>
      </div>
    </>
  );
}
