import React from "react";

interface WelcomeCardProps {
  head: string;
  word: string;
}

function WelcomeCard({ head, word }: WelcomeCardProps) {
  return (
    <div className="w-96 m-5 p-5 border-2 max-sm:w-[300px] rounded-md">
      <div className="text-4xl">{head}</div>
      <div>{word}</div>
    </div>
  );
}

export default WelcomeCard;
