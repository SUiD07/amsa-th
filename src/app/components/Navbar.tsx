// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import logo from "/public/White.png";
// import { useLanguage } from "./LanguageContext"; // ปรับ path ตามโปรเจกต์คุณ

// export default function Navbar() {
//   const { lang, setLang } = useLanguage();

//   return (
//     <div className="drawer z-50 sticky top-0">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col">
//         {/* Navbar */}
//         <div className="navbar bg-[#720606] w-full text-white px-4">
//           {/* Hamburger menu สำหรับมือถือ */}
//           <div className="flex-none lg:hidden">
//             <label
//               htmlFor="my-drawer-3"
//               aria-label="open sidebar"
//               className="btn btn-square btn-ghost"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="inline-block h-6 w-6 stroke-current"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </label>
//           </div>

//           {/* โลโก้ */}
//           <Image
//             src="/White.png"
//             alt="whitelogo"
//             width={48} // w-12
//             height={48} // ใส่เพื่อให้ผ่าน validation
//             className="w-12 h-auto"
//           />

//           {/* ชื่อเว็บ ใช้ flex-grow เพื่อดันปุ่มภาษาไปขวา */}
//           <div className="mx-2 flex-1 px-2 font-bold text-lg">
//             AMSA-Thailand
//           </div>

//           {/* เมนูสำหรับ desktop */}
//           <div className="hidden flex-none lg:block ml-6">
//             <ul className="menu menu-horizontal space-x-4">
//               <li>
//                 <Link className="hover:font-bold" href="/#welcome">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:font-bold" href="./about">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:font-bold" href="./event">
//                   Event
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:font-bold" href="/#teams">
//                   Teams
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:font-bold" href="./article">
//                   Article
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:font-bold" href="./contact">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 {/* ปุ่มเปลี่ยนภาษา ชิดขวา */}
//                 <div className="flex items-center space-x-2 ml-auto">
//                   <button
//                     onClick={() => setLang("en")}
//                     disabled={lang === "en"}
//                     className={`px-3 rounded ${
//                       lang === "en"
//                         ? "bg-white text-[#720606]"
//                         : "bg-transparent"
//                     }`}
//                   >
//                     English
//                   </button>
//                   <button
//                     onClick={() => setLang("th")}
//                     disabled={lang === "th"}
//                     className={`px-3 rounded ${
//                       lang === "th"
//                         ? "bg-white text-[#720606]"
//                         : "bg-transparent"
//                     }`}
//                   >
//                     ไทย
//                   </button>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar สำหรับมือถือ */}
//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer-3"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-base-200 min-h-full w-80 p-4">
//           <li>
//             <Link href="/#welcome">Home</Link>
//           </li>
//           <li>
//             <Link href="./about">About</Link>
//           </li>
//           <li>
//             <Link href="./event">Event</Link>
//           </li>
//           <li>
//             <Link href="/#teams">Teams</Link>
//           </li>
//           <li>
//             <Link href="./article">Article</Link>
//           </li>
//           <li>
//             <Link href="./contact">Contact</Link>
//           </li>
//           <li>
//             {/* ปุ่มเปลี่ยนภาษา ชิดขวา */}
//             <div className="flex items-center mr-auto pl-2">
//               <button
//                 onClick={() => setLang("en")}
//                 disabled={lang === "en"}
//                 className={`px-3 py-1 rounded ${
//                   lang === "en" ? "bg-white text-[#720606]" : "bg-transparent"
//                 }`}
//               >
//                 English
//               </button>
//               <button
//                 onClick={() => setLang("th")}
//                 disabled={lang === "th"}
//                 className={`px-3 py-1 rounded ${
//                   lang === "th" ? "bg-white text-[#720606]" : "bg-transparent"
//                 }`}
//               >
//                 ไทย
//               </button>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import cn from "classnames";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Programs", path: "/programs" },
    { name: "Events", path: "/event" },
    { name: "Articles", path: "/article" },
    { name: "Contact", path: "/contact" },
  ];
  const { lang, setLang } = useLanguage();
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-amsa-blue/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/White.png"
              alt="whitelogo"
              width={48} // w-12
              height={48} // ใส่เพื่อให้ผ่าน validation
              className="w-12 h-auto"
            />
            {/* <div className="w-10 h-10 bg-amsa-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div> */}
            <div
              className={cn(
                "font-serif font-bold text-xl tracking-tight transition-colors",
                scrolled
                  ? //  "text-amsa-blue"
                    "text-white/90"
                  : "text-white",
              )}
            >
              AMSA-Thailand
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white/70",
                  pathname === link.path
                    ? "text-white underline underline-offset-8 decoration-2"
                    : "text-white/90",
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center mr-auto pl-2">
              <button
                onClick={() => setLang("en")}
                disabled={lang === "en"}
                className={`font-sans px-3 py-1 rounded ${
                  lang === "en" ? "bg-white text-[#720606]" : "bg-transparent"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("th")}
                disabled={lang === "th"}
                className={`px-3 py-1 rounded ${
                  lang === "th" ? "bg-white text-[#720606]" : "bg-transparent"
                }`}
              >
                ไทย
              </button>
            </div>
            {/* <Link href="/contact" className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all",
              scrolled
                ? "bg-amsa-blue text-white hover:bg-red-900"
                : "bg-white text-amsa-blue hover:bg-slate-100"
            )}>
              Join Us
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled
                  ? // "text-slate-600"
                    "text-white"
                  : "text-white",
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-100 border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    pathname === link.path
                      ? "text-amsa-blue bg-amsa-light"
                      : "text-slate-600 hover:text-amsa-blue hover:bg-slate-50",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {/* ปุ่มเปลี่ยนภาษา ชิดขวา */}
              <div className="flex items-center mr-auto pl-2">
                <button
                  onClick={() => setLang("en")}
                  disabled={lang === "en"}
                  className={`px-3 py-1 rounded ${
                    lang === "en" ? "bg-white text-[#720606]" : "bg-transparent"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang("th")}
                  disabled={lang === "th"}
                  className={`px-3 py-1 rounded ${
                    lang === "th" ? "bg-white text-[#720606]" : "bg-transparent"
                  }`}
                >
                  ไทย
                </button>
              </div>
              {/* <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-amsa-blue text-white py-3 rounded-xl font-semibold"
                >
                  Join AMSA-Thailand
                </Link>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
