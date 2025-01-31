"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/White.png";

export default function Footer() {
  return (
    <footer className="bg-[#720606] h-40 flex">
      <Image src={logo} alt="smcu" className="mr-2 h-28 w-fit mt-2" />
      <div>
        <div className="text-4xl font-bold text-white px-4 pt-4">AMSA-Thailand</div>
        <div className="text-xl font-bold text-white px-4">
          Asian Medical Students’ Association of Thailand
        </div>
        <div className="text-white px-4">
          is the peak representative body for medical students in Thailand
        </div>
      </div>
      <div className="p-4">
        <div className="text-white font-bold">Our Social Media Platform</div>
        <Link
          className="text-white hover:text-gray-500"
          href="https://www.instagram.com/amsa_thailand/"
        >
          Instagram : @amsa_thailand
        </Link>
        <br />
        <Link
          className="text-white hover:text-gray-500"
          href="https://www.facebook.com/amsathailand/"
        >
          Facebook : AMSA-Thailand
        </Link>
      </div>
    </footer>
  );
}
