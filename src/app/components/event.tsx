import { event2025 } from "./constant/eventlist";
import EventCard from "./eventcard";

export default function Event() {
  return (
    <>
      <div className="font-bold text-2xl bg-white pb-8">
        New Event 
      </div>
      
      <div className="font-bold text-xl bg-white py-2">
      {event2025.year} Event
      </div>
      <div className="bg-white px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
      {event2025.sections.map((item, index) => (
          <>
            {!item.status && (
              <EventCard
                status={item.status}
                name={item.name}              
                link={item.link}
                text={item.text}                
                image={item.image}
              />
            )}
          </>
        ))}
      </div>
      
    </>
  );
}
//pl-10 mx-5 pt-5
