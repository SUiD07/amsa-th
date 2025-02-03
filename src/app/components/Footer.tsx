"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/White.png";
import facebook from "/public/svg/fb.svg";
import instagram from "/public/svg/ig.svg";

export default function Footer() {
  return (
    <footer className="bg-[#720606] h-fit w-full flex max-sm:inline-block">
      <Image src={logo} alt="smcu" className="mr-2 h-28 w-fit my-2 px-4" />
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
      <div className="py-4 w-60 px-4">
        <div className="text-white font-bold">Our Social Media Platform</div>
        <Link
          className="text-white hover:text-gray-500 flex mb-0"
          href="https://www.instagram.com/amsa_thailand/"
        >
          <Image src={instagram} alt="instagram" width={25} height={25} className="mr-1" />
          @amsa_thailand
        </Link>
        <Link
          className="text-white hover:text-gray-500 flex mt-0"
          href="https://www.facebook.com/amsathailand/"
        >
          <Image src={facebook} alt="facebook" width={23} height={23} className="mr-1" />
          AMSA-Thailand
        </Link>
      </div>
    </footer>
  );
}
