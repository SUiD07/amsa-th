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
      <div className="dark:border-none border-2 flex flex-col items-center pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-purple bg-white shadow-xl">
        {status && <div className="text-xl">{status}</div>}
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
            <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{text}</p>
            <div className="card-actions justify-end">
            <a href={link} target="_blank">
                <button className="btn btn-primary">Buy Now</button>
            </a>
                
                
            </div>
            </div>
        </div>
       </div>
      
    </>
  );
}