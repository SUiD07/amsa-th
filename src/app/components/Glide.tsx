"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
// import banner1 from "/public/banner1.svg"
// import banner2 from "/public/banner2.svg"
// import banner3 from "/public/banner3.svg"
// import banner4 from "/public/banner4.svg"

const SliderControlsInside: React.FC = () => {
  const list = [
    {
      src: "https://drive.google.com/uc?id=1J7f187mXHToF2C0uuLR37ZFDAdOtpNSP",
      link: "",
    },
    {
      src: "https://drive.google.com/uc?id=1eGqaaHSbs4izUfNdNDtFegPmrvLDxOZY",
      link: "https://www.instagram.com/amsa_thailand/",
    },
    {
      src: "https://drive.google.com/uc?id=1_hy-WY3JXXlLm9WWjjL4gNBHpeYD9HEb",
      link: "https://www.facebook.com/amsathailand/?locale=th_TH",
    },
    {
      src: "https://drive.google.com/uc?id=1x7O6HMEG4xLuD11foPMMdfruMUVWrY0o",
      link: "https://www.instagram.com/amsa_thailand/",
    },
    {
      src: "https://drive.google.com/uc?id=10k-GbUvohVuXhTKHvfa6QW2vxPCsrTNc",
      link: "https://www.instagram.com/amsa_thailand/",
    },
  ];

  //https://drive.google.com/uc?id=10k-GbUvohVuXhTKHvfa6QW2vxPCsrTNc
  //https://Tailwindmix.b-cdn.net/image-02.jpg
  //export default function SliderControlsInside() {
  //https://drive.google.com/uc?id=1nj7i18wnR95zKyxeYWYxue5vHWCJ_yCS
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with controls inside --> */}
      <div className="relative w-full glide-01 z-0">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {/* for desktop */}

            {list.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  {/*<img
                  src={item.src}
                  className="w-full max-w-full max-h-full m-auto"
                  alt={`Slide ${index + 1}`}
                />*/}
                  <Image
                    className="w-full max-w-full max-h-full m-auto"
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    width={1500}
                    height={1500}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with controls inside --> */}
    </>
  );
};

export default SliderControlsInside;
