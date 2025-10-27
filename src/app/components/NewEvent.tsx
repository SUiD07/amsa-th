"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { useLanguage } from "./LanguageContext";
import { supabase } from "@/src/lib/supabase";

// แปลภาษา UI
const translations = {
  en: { eventTitle: "2025 Event" },
  th: { eventTitle: "กิจกรรมปี 2025" },
};

// TypeScript interface ของ row events
interface EventItem {
  id: number;
  status: string;
  name_th: string;
  name_en: string;
  text_th: string;
  text_en: string;
  link: string;
  image: string;
  year: string;
}

export default function Event() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // ใช้แค่ EventItem type ไม่ใส่ table literal
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("year", "2025 - 2026");

        // type assertion
        const eventsData = data as EventItem[] | null;

        if (error) {
          console.error("Error fetching events:", error.message);
        } else if (eventsData) {
          setEvents(eventsData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!events.length) return <div>No events found.</div>;

  return (
    <>
      <div className="pl-10 mx-5 pt-5 font-bold text-xl bg-white py-2 pb-8">
        New Event
      </div>
      <div className="bg-white px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((item) => {
          const name = lang === "th" ? item.name_th : item.name_en;
          const text = lang === "th" ? item.text_th : item.text_en;

          return (
            <React.Fragment key={item.id}>
              {
              item.status &&
               (
                <EventCard
                  status={item.status}
                  name={name}
                  link={item.link}
                  text={text}
                  image={item.image}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
