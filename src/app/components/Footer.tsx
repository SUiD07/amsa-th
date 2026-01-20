"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from "/public/White.png";
// import facebook from "/public/svg/fb.svg";
// import instagram from "/public/svg/ig.svg";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const translations = {
    en: {
      intro:
        "If you’re interested in AMSA-Thailand’s latest news, activities, and exclusive opportunities, follow us at:",
      outro:
        "Don’t forget to hit follow for the latest updates and become part of our global medical student network! 💌🕊️",
    },
    th: {
      intro:
        "หากคุณสนใจติดตามข่าวสาร กิจกรรม และโอกาสพิเศษจาก  AMSA-Thailand สามารถติดตามเราได้ที่  ",
      outro:
        "อย่าลืมกดติดตามเพื่ออัปเดตข่าวสารล่าสุด และเป็นส่วนหนึ่งของเครือข่ายนักศึกษาแพทย์ระดับนานาชาติกับเรานะ! 💌🕊️",
    },
  };
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <footer className="bg-[#720606] h-fit w-full flex max-sm:inline-block">
      <Image
        src="/White.png"
        alt="whitelogo"
        height={112} // h-28 = 28 × 4 = 112px
        width={400} // ใส่ค่าอะไรก็ได้ที่เป็นสัดส่วนคร่าว ๆ
        className="h-28 w-auto mr-2 my-2 px-4"
      />

      <div>
        <div className="text-4xl font-bold text-white px-4 pt-4">
          AMSA-Thailand
        </div>
        <div className="text-xl font-bold text-white px-4">
          Asian Medical Students’ Association of Thailand
        </div>
        <div className="text-white px-4">
          the peak representative body for medical students in Thailand
        </div>
      </div>
      {/* <div className="grid grid-cols-2"> */}
      <div className="text-white py-4 w-60 px-4">
        <span className="font-bold mt-2">Our Social Media Platform</span>
        <br />
        {t.intro}
      </div>
      {/* <div></div> */}
      {/* </div> */}
      {/* <div className="text-white">{t.intro}</div> */}
      {/* <div className="text-white px-4">{t.intro}</div> */}
      <div className="py-4 w-60 px-4">
        <Link
          className="text-white hover:text-gray-500 flex mb-0"
          href="https://www.instagram.com/amsa_thailand/"
        >
          <Image
            src="/svg/ig.svg"
            alt="instagram"
            width={25}
            height={25}
            className="mr-1"
          />
          @amsa_thailand
        </Link>
        <Link
          className="text-white hover:text-gray-500 flex mt-0"
          href="https://www.facebook.com/amsathailand/"
        >
          <Image
            src="/svg/fb.svg"
            alt="facebook"
            width={23}
            height={23}
            className="mr-1"
          />
          AMSA-Thailand
        </Link>
      </div>
      {/* <div className="text-white px-4">{t.outro}</div> */}
      <br />
    </footer>
  );
}
