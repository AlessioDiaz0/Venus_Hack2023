"use client";
import "./flashcards.css";
import { useState } from "react";

export default function Flashcards() {
  const [words, setWords] = useState([
    {
      word: "interpolate",
      definition:
        "insert (something of a different nature) into something else",
      pronunciation: "in-TER-puh-layt",
    },
    {
      word: "sapient",
      definition: "possessing or expressing great wisdom",
      pronunciation: "SAY-pee-unt",
    },
    {
      word: "hobbyhorse",
      definition: "a subject that someone dwells on or talks about frequently",
      pronunciation: "HAH-bee-horss",
    },
    {
      word: "adumbrate",
      definition: "to vaguely foreshadow or suggest something",
      pronunciation: "AD-um-brayt",
    },
  ]);
  return (
    <div class="flex justify-center">
      <div class="box">
        <ul class="text-4xl">
          {words.map((word, i) => (
            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
              <li>
                {word.word} ({word.pronunciation})
              </li>
              <li class="text-2xl">{word.definition}</li>
            </div>
          ))}
        </ul>
        {/* <a href="www.something.com" class="link-item" onclick="document.querySelector('.box').scrollTop = 10000; return false;">GO TO THE LAST ITEM</a> */}
      </div>
    </div>
  );
}
