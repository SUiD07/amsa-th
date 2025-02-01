import { event2025 } from "./constant/eventlist";
import EventCard from "./eventcard";

export default function Event() {
  return (
    <>
      <div className="font-bold text-2xl bg-white pb-8 ml-5">
        New Event 
      </div>
      
      <div className="bg-white px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {event2025.sections.map((item, index) => (
          <>
            {item.status && (
              <EventCard key={index}
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
  )
}