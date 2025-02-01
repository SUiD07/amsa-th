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
      {/* <div>
        Hello {name} {role} {nickname} {email} {ig} {image}
      </div> */}
      <div className="dark:border-none border-2 flex flex-col items-center pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-purple bg-white ">
        {status && <div className="text-xl">{status}</div>}
        <div className="card bg-base-100 w-96  ">
            <figure className="px-8 py-8 items-center">
                <img
                    className="w-80 bg-white shadow-md rounded-lg overflow-hidden "
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body ">
            <h3 className="text-lg ml-8 font-semibold " >{name}&ensp;
                <span className="bg-[#720606] text-white text-xs px-2 py-1 rounded-full border-2">NEW</span>
            </h3>
                <p className="pb-5">{text}</p>
            <div className="card-actions justify-end">
            <a href={link} target="_blank">
                <button className="bg-[#720606] text-white text-xs px-2 py-2 rounded-full btn btn-primary">Click For More</button>
            </a>
                
                
            </div>
            </div>
        </div>
       </div>
      
    </>
  );
}