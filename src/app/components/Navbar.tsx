"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/White.png";
import { NavList } from "../constants/navList";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sticky top-0 bg-[#720606] z-50 flex justify-between">
        <div className="flex m-2 p-2 text-sm text-white font-bold">
          <Image src={logo} alt="smcu" className="mr-2 h-6 w-fit" />
          AMSA-Thailand
        </div>
        <div className="m-2 p-2 text-white text-sm rounded-full max-sm:hidden">
          {NavList.map((item,itemIndex) => (
            
            <a key={itemIndex} className="m-2 hover:font-bold">{item.name}</a>
          ))}
        </div>
        {/* mobile */}
        <div className="md:hidden w-5/6 rounded-r-lg">
          <button
            className="text-black dark:text-white focus:outline-none "
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 block"
              style={{ position: "fixed", right: 20 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              {isOpen ? (
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="transition ease-in-out dealay-150 left-0 right-0 rounded-lg flex flex-col items-center shadow-md bg-white fixed md:hidden my-12 mx-5">
            {NavList.map((item) => (
              <a className="m-2 hover:font-bold">{item.name}</a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
