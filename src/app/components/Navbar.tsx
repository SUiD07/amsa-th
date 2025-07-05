'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/White.png";
import { useLanguage } from "./LanguageContext"; // ปรับ path ตามโปรเจกต์คุณ

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="drawer z-50 sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-[#720606] w-full text-white px-4">
          {/* Hamburger menu สำหรับมือถือ */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* โลโก้ */}
          <Image src={logo} alt="smcu" className="w-12 h-auto" />

          {/* ชื่อเว็บ ใช้ flex-grow เพื่อดันปุ่มภาษาไปขวา */}
          <div className="mx-2 flex-1 px-2 font-bold text-lg">AMSA-Thailand</div>

          

          {/* เมนูสำหรับ desktop */}
          <div className="hidden flex-none lg:block ml-6">
            <ul className="menu menu-horizontal space-x-4">
              <li>
                <Link className="hover:font-bold" href="/#welcome">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link className="hover:font-bold" href="./resources">
                  Resources
                </Link>
              </li> */}
              <li>
                <Link className="hover:font-bold" href="./event">
                  Event
                </Link>
              </li>
              <li>
                <Link className="hover:font-bold" href="/#teams">
                  Teams
                </Link>
              </li>
              <li>
                <Link className="hover:font-bold" href="./article">
                  Article
                </Link>
              </li>
              <li>
                {/* ปุ่มเปลี่ยนภาษา ชิดขวา */}
          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={() => setLang('en')}
              disabled={lang === 'en'}
              className={`px-3 py-1 rounded ${
                lang === 'en' ? 'bg-white text-[#720606]' : 'bg-transparent'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('th')}
              disabled={lang === 'th'}
              className={`px-3 py-1 rounded ${
                lang === 'th' ? 'bg-white text-[#720606]' : 'bg-transparent'
              }`}
            >
              ไทย
            </button>
          </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar สำหรับมือถือ */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link href="/#welcome">Home</Link>
          </li>
          {/* <li>
            <Link href="./resources">Resources</Link>
          </li> */}
          <li>
            <Link href="./event">Event</Link>
          </li>
          <li>
            <Link href="/#teams">Teams</Link>
          </li>
          <li>
            <Link href="./article">Article</Link>
          </li>
          <li>
                {/* ปุ่มเปลี่ยนภาษา ชิดขวา */}
          <div className="flex items-center mr-auto pl-2">
            <button
              onClick={() => setLang('en')}
              disabled={lang === 'en'}
              className={`px-3 py-1 rounded ${
                lang === 'en' ? 'bg-white text-[#720606]' : 'bg-transparent'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('th')}
              disabled={lang === 'th'}
              className={`px-3 py-1 rounded ${
                lang === 'th' ? 'bg-white text-[#720606]' : 'bg-transparent'
              }`}
            >
              ไทย
            </button>
          </div>
              </li>
        </ul>
      </div>
    </div>
  );
}
