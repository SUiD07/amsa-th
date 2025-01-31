import React from "react";
import WelcomeCard from "./WelcomeCard";
import { welcomeList } from "../constants/welcomeList";

export default function Welcome() {
  return (
    <>
      {welcomeList.map((item) => (
        <>
          <WelcomeCard head={item.head} word={item.word} />
        </>
      ))}
    </>
  );
}
