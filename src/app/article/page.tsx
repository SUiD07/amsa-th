"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Button, Spinner } from "flowbite-react";
import { supabase } from "@/src/lib/supabase";
import { motion } from "motion/react";

export default function Article() {
  const router = useRouter();
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

  const handleClick = (id: number) => {
    setLoadingId(id);
    router.push(`/article/${id}`);
  };

  if (loading) return <div>Loading articles...</div>;
  if (!articles || articles.length === 0) return <div>No articles found</div>;

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
              Academic Publications
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Medical <span className="italic text-amsa-blue">Article</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Official publications, research papers, and academic insights from
              the medical student community of Thailand.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-bold my-4 font-serif">
              Latest Articles
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        {articles.map((item) => (
          <Card key={item.id} className="w-96 m-2">
            {item.img_head && (
              <img
                src={item.img_head}
                alt={item.head}
                className="mx-auto flex w-96 h-48 object-cover"
              />
            )}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.head}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.detail}
            </p>
            <h4 className="font-semibold">{item.author}</h4>
            <a href={item.word} target="_blank">
              <button className="bg-[#720606] text-white text-xs  py-2 rounded-full btn btn-primary">
                Read More
              </button>
            </a>
          </Card>
        ))}
      </div>

      <Footer />
    </>
  );
}
