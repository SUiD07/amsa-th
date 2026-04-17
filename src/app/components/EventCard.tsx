// import Image from "next/image";
// import imgemail from "/public/email.svg";
// import instagram from "/public/instagram.svg";
import { motion } from "motion/react";
import Link from "next/dist/client/link";
import { ArrowRight } from "lucide-react";


interface EventCardProps {
  status: string;
  name: string;
  link: string;
  text: string;
  image: string;
}

export default function EventCard({
  status,
  name,
  link,
  text,
  image,
}: EventCardProps) {
  return (
    <>
      {/*Hello {name}bg-base-100/items-center {role} {nickname} {email} {ig} {image}
      </div> */}
      <div className="grid grid-cols-1 gap-8">
            {/* {events.map((event) => ( */}
              <motion.div
                // key={event.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-auto overflow-hidden">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-amsa-blue text-xs font-bold px-3 py-1 rounded-full">{status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-400 mb-2">2025-2026</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amsa-blue transition-colors">{name}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{text}</p>
                  <Link 
                    href={`${link}`} 
                    className="inline-flex items-center gap-2 text-amsa-blue font-bold text-sm"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            {/* ))} */}
          </div>

      {/* <div className="border-2 pb-5 rounded-l-lg rounded-r-lg ">
        {status && <div className="text-xl mt-5 ml-2">{}</div>}

        <div className="card ">
          <figure className="mx-3">
            <img
              className="p-3 shadow-md rounded-lg overflow-hidden "
              src={image}
              alt={name}
            />
          </figure>
          <div className="card-body ">
            <h3 className="text-lg font-semibold ">
              {name}&ensp;
              {status && status.trim() !== "" && (
                <span className="bg-[#720606] text-white text-xs px-2 py-1 rounded-full border-2">
                  NEW
                </span>
              )}
            </h3>
            <p className="text-sm">{text}</p>
            <div className="card-actions justify-end">
              <a href={link} target="_blank">
                <button className="bg-[#720606] text-white text-xs  py-2 rounded-full btn btn-primary">
                  Click For More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/*<div className=" border-2 flex flex-col mb-5 rounded-l-lg rounded-r-lg  max-sm:grid-cols-1 md:grid-cols-3 ">
        {status && <div className="text-xl mt-2 ml-2">{status}</div>}
        <div className="card w-full max-w-xs">
            <figure className="px-5 py-5 flex justify-center">
                <img
                    className= "w-full shadow-md rounded-lg overflow-hidden "
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body mx-2 ">
            <h3 className="text-lg ml-2 font-semibold " >{name}&ensp;
                <span className="bg-[#720606] text-white text-xs px-2 py-1 rounded-full border-2">NEW</span>
            </h3>
                <p className="pb-1 mx-0">{text}</p>
            <div className="card-actions justify-end">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#720606] text-white text-xs px-2 py-2 rounded-full btn btn-primary">Click For More</button>
            </a>
                
                
            </div>
            </div>
        </div>
       </div>*/}
    </>
  );
}
