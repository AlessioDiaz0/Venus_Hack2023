import { useState } from "react";
import firebase from "firebase/compat/app";

export default function AddButton({ userID, db }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const fieldValue = firebase.firestore.FieldValue;
  const languages = [
    "Spanish",
    "Korean",
    "Italian",
    "Vietnamese",
    "Cantonese",
    "English",
  ];

  const addLanguage = async () => {
    if (selectedLanguage && selectedLanguage.length > 0) {
      console.log(selectedLanguage);
      const userLanguagesRef = db.collection("userLanguages").doc(userID);
      const doc = await userLanguagesRef.get();
      if (!doc.exists) {
        console.log("Nope");
        await userLanguagesRef.set({ languages: [selectedLanguage] });
      } else {
        console.log("yep");
        await userLanguagesRef.update({
          languages: fieldValue.arrayUnion(selectedLanguage),
        });
      }
      //await db.collection("userLanguages").doc(userID).set({selectedLanguage});
    }
  };

  return (
    <>
      <div>
        <select
          name="Language"
          id="select-language"
          class="rounded-xl text-indigo-950 py-2 px-3 m-2"
          onChange={(e) => {
            setSelectedLanguage(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Language
          </option>
          {languages.map((language, i) => (
            <option key={i} value={language}>
              {language}
            </option>
          ))}
        </select>
        <button
          onClick={addLanguage}
          class="max-w-sm text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100"
        >
          Add
        </button>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}
