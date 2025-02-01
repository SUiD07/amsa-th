"use client";
import { link } from "fs";
import React, { useEffect } from "react";
import Image from "next/image";
const TeamsFlex: React.FC = () => {
  const TeamsFlexList = [
    {   text: "co_amsathailand",
        image:"/image/co.jpg",
        link:"https://www.instagram.com/co_amsathailand/" ,
    },
    {   text: "mds_amsathailand",
        image:"/image/mds.jpg",
        link:"https://www.instagram.com/mds_amsathailand/",
    },
    {   text: "amsa",
        image:"/image/logo.png",
        link:"https://www.instagram.com/amsa_thailand/following/"
    },
    {   text: "amsep",
        image:"/image/logo.png",
        link:"https://www.instagram.com/amsep_thailand/"
    },
    {   text: "amsa",
        image:"/image/logo.png",
        link:"https://www.instagram.com/amsa_thailand/following/"
    },
  ];
return (
    <> 
  
    <div className="ml-8 mb-8 pt-5 pb-5 w-80 bg-[#720606] items-center shadow-lg rounded-md ">
    <h2 className="text-lg font-bold text-white ml-8 mt-5">TEAM</h2>    
    {TeamsFlexList.map((actitem, actindex) => (            
        <div className="space-y-2 px-4 py-2" key={actindex}>   
            <div className="flex items-center bg-rose-50 rounded-full px-4 py-2 ">            
                <Image
                  src={actitem.image}
                  className=" rounded-full object-cover mb-2 mt-2 "
                  alt={`Team ${actindex + 1}`}
                  width={25}
                  height={25}
                />
            <a href={actitem.link} className="text-sm pl-4">{actitem.text}</a>
            </div>
        </div>
    
    ))}
    </div>
    
    </>  
)
}
export default TeamsFlex;