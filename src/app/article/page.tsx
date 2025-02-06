"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/articleCard";
import { articleList } from "../constants/articleList";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Article() {
  return (
    <>
      <Navbar />
      <div className="text-4xl p-5 font-bold">Article</div>
      {articleList.map((item, itemIndex) => (
          <Card key={itemIndex} className="w-96 inline-block m-2">
            <img src={item.imgHead} alt="Head image" className="mx-auto flex w-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.head}
            </h5>
            <h4 className="font-semibold">{item.author}</h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.detail}
            </p>
            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
      ))}
      {/* 
      {articleList.map((item, itemIndex) => (
        <ArticleCard head={item.head} word={item.word} author={item.author} />
      ))} */}
      {/* <Footer /> */}
    </>
  );
}
