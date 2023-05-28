"use client";
import { useEffect, useState } from "react";
import { firestore, auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import Flashcards from "./flashcards";
import Quiz from "./quiz";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [userLanguages, setUserLanguages] = useState([]);
  const [activeTab, setActiveTab] = useState("flashcards");
  const activeStyle =
    "p-2 text-center block rounded-xl text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 font-bold hover:from-indigo-100 hover:to-fuchsia-100 hover:cursor-pointer";

  const inactiveStyle =
    "p-2 text-center block rounded-xl text-white font-bold hover:cursor-pointer";
  // const [languages, languagesLoading, languagesError] = user
  //   ? useDocument(firestore.collection("userLanguages").doc(user.uid))
  //   : useDocument();
  const db = firestore;

  // useEffect(() => {
  //   console.log(user);
  //   if (user) {
  //     db.collection("userLanguages")
  //       .doc(user.uid)
  //       .get()
  //       .then((response) => {
  //         if (response.exists) {
  //           setUserLanguages(response.data().languages);
  //         }
  //       });
  //   }
  // }, [user]);

  return user ? (
    <div>
      <div class="nav mx-9 gap-3 p-4 mt-8">
        <ul class="flex justify-center">
          <li class="flex-grow-0 mr-2">
            <button
              onClick={() => {
                setActiveTab("flashcards");
              }}
              class={activeTab === "flashcards" ? activeStyle : inactiveStyle}
            >
              Flashcards
            </button>
          </li>
          <li class="flex-grow-0 mr-2">
            <button
              onClick={() => {
                setActiveTab("quiz");
              }}
              class={activeTab === "quiz" ? activeStyle : inactiveStyle}
            >
              Quiz
            </button>
          </li>
        </ul>
      </div>
      <div class="mb-5">
        {activeTab === "flashcards" ? <Flashcards /> : <Quiz />}
      </div>
    </div>
  ) : (
    <div class="font-Nunito text-center text-xl font-bold">Loading...</div>
  );
}
