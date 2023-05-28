"use client";
import "./quiz.css";
import { useState } from "react";
import * as React from "react";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState([
    { word: "word1", translation: "translation1" },
    { word: "word2", translation: "translation2" },
    { word: "word3", translation: "translation3" },
    { word: "word4", translation: "translation4" },
  ]);

  return (
    <div class="flex justify-center p-5">
      <div class="left-0 absolute mt-40">
        <button
          class="text-9xl px-20 hover:text-black"
          onClick={() => {
            currentIndex > 0
              ? setCurrentIndex(currentIndex - 1)
              : setCurrentIndex(words.length - 1);
          }}
        >
          {"<"}
        </button>
      </div>
      <div class="flip-card absolute left-0 right-0 mx-72">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl flex justify-center">
              {words[currentIndex].word}
            </h2>
          </div>
          <div class="flip-card-back">
            <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl flex justify-center">
              {words[currentIndex].translation}
            </h2>
          </div>
        </div>
      </div>
      <div class="right-0 absolute mt-40">
        <button
          class="text-9xl px-20 hover:text-black"
          onClick={() => {
            currentIndex < words.length - 1
              ? setCurrentIndex(currentIndex + 1)
              : setCurrentIndex(0);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
