"use client";
import AddButton from "./addButton";
import { useEffect, useState } from "react";
import { firestore, auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [userLanguages, setUserLanguages] = useState([]);
  // const [languages, languagesLoading, languagesError] = user
  //   ? useDocument(firestore.collection("userLanguages").doc(user.uid))
  //   : useDocument();
  const db = firestore;

  useEffect(() => {
    console.log(user);
    if (user) {
      db.collection("userLanguages")
        .doc(user.uid)
        .get()
        .then((response) => {
          if (response.exists) {
            setUserLanguages(response.data().languages);
          }
        });
    }
  }, [user]);

  const renderLanguageCards = () => {
    return (
      <div>
        {userLanguages.map((lang, i) => (
          <div class="p-2 bg-white text-black">
            <h2>{lang}</h2>
          </div>
        ))}
      </div>
    );
  };

  return user ? (
    <div class="flex flex-col justify-center p-3 mt-3">
      <h1 class="text-center text-3xl font-semibold m-3">Dashboard</h1>
      <div class="flex min-w-max justify-center p-3 gap-2">
        <div>{renderLanguageCards()}</div>
        <AddButton userID={user.uid} db={db} />
      </div>
    </div>
  ) : (
    <div class="font-Nunito text-center text-xl font-bold">Loading...</div>
  );
}
