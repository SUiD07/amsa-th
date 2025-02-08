import Image from "next/image";
import imgemail from "/public/email.svg";
import instagram from "/public/instagram.svg";

interface EventCardProps {
  status: string;
  name: string;
  link: string;
  text: string;
  image: string;
}

export default function MemberCard({
  status,
  name,
  link,
  text,
  image,
}: EventCardProps) {
  return (
    <>
       
        {/*Hello {name}bg-base-100/items-center {role} {nickname} {email} {ig} {image}
      </div> */ }
      
       <div className="border-2 pb-5 rounded-l-lg rounded-r-lg ">
        {status && <div className="text-xl mt-5 ml-2">{status}</div>}
          
          <div className="card ">
            <figure className="mx-3">
                <img
                    className="p-3 shadow-md rounded-lg overflow-hidden "
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body ">
            <h3 className="text-lg ml-8 font-semibold " >{name}&ensp;
                <span className="bg-[#720606] text-white text-xs px-2 py-1 rounded-full border-2">NEW</span>
            </h3>
                <p className="">{text}</p>
            <div className="card-actions justify-end">
            <a href={link} target="_blank">
                <button className="bg-[#720606] text-white text-xs  py-2 rounded-full btn btn-primary">Click For More</button>
            </a>
            </div>
            </div>
          </div>
       </div>
    
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