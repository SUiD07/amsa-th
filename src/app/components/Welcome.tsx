import React from "react";
import WelcomeCard from "./WelcomeCard";
import { welcomeList } from "../constants/welcomeList";
import logo from "/public/Black.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <>
      {/* {welcomeList.map((item, itemIndex) => (
        <WelcomeCard key={itemIndex} head={item.head} word={item.word} />
      ))} */}
      <div className="hero rounded-3xl bg-white w-full max-w-[1000px] flex mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={logo} alt="Logo" className="max-w-sm rounded-lg w-80" />
          <div>
            <h1 className="text-5xl font-bold">AMSA คืออะไร?</h1>
            <p className="py-6">
              AMSA (The Asian Medical Students’ Association) หรือ
              องค์กรนักศึกษาแพทย์แห่งเอเชีย
              คือองค์กรซึ่งดำเนินการโดยนักศึกษาแพทย์จากกว่า 27 ประเทศทั่วโลกAMSA
              ถูกก่อตั้งขึ้นในปี 1985 ที่กรุงมะนิลา ประเทศ ฟิลิปปินส์
              องค์กรของเราคือองค์กรที่ไม่แสวงหากำไร
              และไม่ยุ่งเกี่ยวกับการเมืองระหว่างประเทศ โดยมีจุดมุ่งหมายหลักคือ
              สนับสนุนการพัฒนาสาธารณสุขในสังคม และ
              เสริมสร้างมิตรภาพระหว่างนักศึกษาแพทย์ทั่วโลก AMSA
              ประกอบไปด้วยสมาชิกจาก 27 ประเทศทั่วโลก
            </p>
          </div>
        </div>
      </div>
      <div className="text-6xl font-bold text-center pt-5 pb-2">Vision</div>
      <div className="flex justify-center max-sm:block">
        <div className="card bg-base-100 w-72 max-sm:mx-auto">
          <div className="card-body">
            <h2 className="card-title mx-auto">Knowledge</h2>
            <p className="mx-auto">ความรู้</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 max-sm:mx-auto">
          <div className="card-body">
            <h2 className="card-title mx-auto">Action</h2>
            <p className="mx-auto">การกระทำเพื่อประโยชน์ของสังคม</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 max-sm:mx-auto">
          <div className="card-body">
            <h2 className="card-title mx-auto">Friendship</h2>
            <p className="mx-auto">มิตรภาพระหว่างนักศึกษาแพทย์ทั่วโลก</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
