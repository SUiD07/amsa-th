import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";
import Glide from "./components/glide";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          width: "100vw",
        }}
      >
        <Glide />
        <div style={{ backgroundColor: "white", width: "100vw" }}>
          <div
            id="home"
            className=" bg-white dark:text-white dark:bg-gray-500 pb-16 text-center pt-14  "
          >
            <div className="text-4xl lg:text-6xl font-bold pt-5 max-md:text-3xl">
              AMSA
            </div>
            <div className="text-4xl lg:text-6xl font-bold max-md:text-3xl">
              ASIAN MEDICAL STUDENTS' <br className="md:hidden" />
              ASSOCIATION INTERNATIONAL
            </div>
            <br />
          </div>
        </div>
      </div>
      <section id="welcome">
        <Welcome />
      </section>
      <section id="resources">
        {/* ใส่ resources ครงนี้ */}
      </section>
      <section id="teams">
        {/* ใส่ teams ครงนี้ */}
      </section>
      {/* <Footer /> */}
    </>
  );
}
