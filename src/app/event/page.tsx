import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Newevent from "../components/Newevent";
import Event from "../components/event";
export default function Home() {
  return (
    <main className="font-ibm">
        <Navbar />
        
        <Image
            className="w-full max-w-full max-h-full m-auto"
            src="https://drive.google.com/uc?id=1J7f187mXHToF2C0uuLR37ZFDAdOtpNSP"
            alt="Slide1"
            width="1000"
            height="1000"
        />
        <Newevent />
        <Event />
    </main>
  )
}