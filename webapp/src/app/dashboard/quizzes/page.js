"use client";

import "./page.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as React from "react";
export default function Quizzes() {
  const [currentWord, setCurrentWord] = useState();
  const [currentTrans, setCurrentTrans] = useState();
  const change_word = () => {
    if (currentWord == "Quiz1") {
      setCurrentWord("Quiz2");
      setCurrentTrans("Translation2");
    } else {
      setCurrentWord("Quiz1");
      setCurrentTrans("Translation1");
    }
  };
  const router = useRouter();
  const flashcard = () => {
    router.push("/dashboard/flashcards");
  };
  React.useEffect(() => {
    setCurrentWord("Quiz1");
    setCurrentTrans("Translation1");
  }, []);
  return (
    <main class="flex flex-row">
      <div class="flex flex-col gap-y-16 py-40 px-2">
        <button
          class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100"
          onClick={flashcard}
        >
          Flashcards
        </button>
        <button class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100">
          <u>Quiz</u>
        </button>
      </div>
      <button
        class="text-9xl px-20 py-72 hover:text-black"
        onClick={change_word}
      >
        {"<"}
      </button>
      <div class="flex flex-col gap-y-16 px-10">
        <h1 class="font-Nunito font-extrabold text-3xl py-5 px-64">Language</h1>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl flex justify-center">
                {currentWord}
              </h2>
            </div>
            <div class="flip-card-back">
              <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl flex justify-center">
                {currentTrans}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button class="text-9xl px-20 hover:text-black" onClick={change_word}>
        {">"}
      </button>
    </main>
  );
}
