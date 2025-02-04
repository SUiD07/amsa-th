import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";
import Glide from "./components/glide";
import Event from "./components/event";
import Newevent from "./components/Newevent";
import Team from "./components/Team";

export default function Home() {
  return (
    <main className="font-ibm">
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
          <div id="home" className=" bg-white  pb-16 text-center pt-14  ">
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
        <Newevent />
      </section>
      <section id="teams">
        <Team />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
