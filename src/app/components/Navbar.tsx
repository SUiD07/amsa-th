import React from "react";
import { NavList } from "../constants/navList";
import Link from "next/link";
import logo from "/public/White.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="drawer z-50 sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-[#720606] w-full text-white">
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
          <Image src={logo} alt="smcu" className="w-12 h-fit" />
          <div className="mx-2 flex-1 px-2">AMSA-Thailand</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link className="hover:font-bold" href='/#welcome'>Home</Link>
              </li>
              <li>
                <Link className="hover:font-bold" href='/#resources'>Resources</Link>
              </li>
              <li>
                <Link className="hover:font-bold" href='/#teams'>Teams</Link>
              </li>
              <li>
                <Link className="hover:font-bold" href='./article'>Article</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
                <Link href='/#welcome'>Home</Link>
              </li>
              <li>
                <Link href='/#resources'>Resources</Link>
              </li>
              <li>
                <Link href='/#teams'>Teams</Link>
              </li>
              <li>
                <Link href='./article'>Article</Link>
              </li>
        </ul>
      </div>
    </div>
  );
}
