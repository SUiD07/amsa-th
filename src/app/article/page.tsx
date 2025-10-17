"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Button, Spinner } from "flowbite-react";
import { supabase } from "@/src/lib/supabase";

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
      <div className="text-4xl p-5 font-bold">Articles</div>
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
            <h4 className="font-semibold">{item.author}</h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.detail}
            </p>
            <Button className="mt-2 bg-[#720606]" onClick={() => handleClick(item.id)}>
              {loadingId === item.id ? (
                <>
                  Loading...
                  <Spinner size="sm" className="ml-2" />
                </>
              ) : (
                "Read More"
              )}
            </Button>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
