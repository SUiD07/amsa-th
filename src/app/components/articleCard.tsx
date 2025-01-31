import React from "react";

interface ArticleCardProps {
  head: string;
  word: string;
  author:string;
}

function ArticleCard({ head, word,author }: ArticleCardProps) {
  return (
    <div className="m-5 p-5 border-2 w-11/12 rounded-md">
      <div className="text-4xl font-bold">{head}</div>
      <div className="text-xl font-bold">{author}</div>
      <div>{word}</div>
    </div>
  );
}

export default ArticleCard;
