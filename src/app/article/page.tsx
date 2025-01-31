import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/articleCard";
import { articleList } from "../constants/articleList";

export default function Article() {
  return (
    <>
      <Navbar />
      <div className="text-4xl p-5 font-bold">Article</div>
      {articleList.map((item,itemIndex)=>(
        <ArticleCard
          head={item.head}
          word={item.word}
          author={item.author}
        />
      ))}
      {/* <Footer /> */}
    </>
  );
}
