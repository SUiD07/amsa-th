"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Button, Spinner } from "flowbite-react";
import { supabase } from "@/src/lib/supabase";
import { motion } from "motion/react";
import { useLanguage } from "../components/LanguageContext";

// ระบบแปลภาษาสำหรับหน้าบทความ
const translations = {
  en: {
    badge: "Academic Publications",
    titlePrefix: "Medical Article",
    // titleItalic: "Article",
    description: "Official publications, research papers, and academic insights from the medical student community of Thailand.",
    latestTitle: "Latest Articles",
    readMore: "Read More",
    loading: "Loading articles...",
    noArticles: "No articles found"
  },
  th: {
    badge: "บทความทางวิชาการ",
    titlePrefix: "บทความทางการแพทย์",
    // titleItalic: "ทางการแพทย์",
    description: "วารสารวิชาการ ผลงานวิจัย และบทวิเคราะห์ที่น่าสนใจจากเครือข่ายนิสิตนักศึกษาแพทย์ไทย",
    latestTitle: "บทความล่าสุด",
    readMore: "อ่านเพิ่มเติม",
    loading: "กำลังโหลดบทความ...",
    noArticles: "ไม่พบบทความในขณะนี้"
  }
};

export default function Article() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("contents")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner size="xl" />
      <span className="ml-3">{t.loading}</span>
    </div>
  );

  return (
    <>
      <Navbar />
      {/* Header */}
      <section className="relative py-32 bg-slate-900 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/medical-journal/1920/1080?grayscale"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-amsa-blue text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
              {t.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              {t.titlePrefix} 
              {/* <span className="italic text-amsa-blue">{t.titleItalic}</span> */}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              {t.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-bold font-serif">
            {t.latestTitle}
          </h2>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            {t.noArticles}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow border-none bg-slate-50">
                {item.img_head && (
                  <img
                    src={item.img_head}
                    alt={item.head}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-1">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2 line-clamp-2">
                    {item.head}
                  </h5>
                  <p className="font-normal text-gray-600 mb-4 line-clamp-3 text-sm">
                    {item.detail}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-amsa-blue">{item.author}</span>
                    <a href={item.word} target="_blank" rel="noopener noreferrer">
                      <button className="bg-amsa-blue hover:bg-slate-800 text-white text-[10px] uppercase tracking-widest font-bold py-2 px-6 rounded-full transition-colors">
                        {t.readMore}
                      </button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}