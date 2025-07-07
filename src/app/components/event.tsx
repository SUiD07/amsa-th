import { event2025 } from "./constant/eventlist";
import EventCard from "./eventcard";

export default function Event() {
  return (
    <>
    
      
      <div className="font-bold text-xl bg-white py-2 pb-8 ml-5">
      {event2025.year} Event
      </div>
      <div className="bg-white px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {event2025.sections.map((item, index) => (
          <>
            {!item.status && (
              <EventCard
                status={item.status}
                name={item.name}              
                link={item.link}
                text={item.text}                
                image={item.image}
                key={index}
              />
            )}
          </>
        ))}
      </div>
      
    </>
  );
}
//pl-10 mx-5 pt-5
