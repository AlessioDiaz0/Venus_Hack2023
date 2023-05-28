"use client";
import { auth } from "../../firebase/config";
import "firebase/auth";
import "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function DashboardLayout({ children }) {
  const [user, loading, error] = useAuthState(auth);
  console.log("Loading ", loading, "| Current user:", user, " | Error:", error);
  const router = useRouter();
  const sign_out = () => {
    auth
      .signOut()
      .then((res) => {
        console.log("log out works.");
        router.push("/");
      })
      .catch((error) => {
        console.log("log out no work :(");
        console.log(error.message);
      });
  };
  return (
    <main class="min-h-screen bg-gradient-to-b p-4 from-purple-950 via-indigo-950 to-slate-950">
      <div class="flex p-4 justify-center">
        <div class="">
          <span class="font-Nunito font-black text-4xl bg-gradient-to-r from-fuchsia-200 to-violet-400 bg-clip-text text-transparent">
            <a href="/">VenusLingo!</a>
          </span>
        </div>
        <div class="absolute top-0 right-0 m-8">
          <span>
            <button
              type="button"
              onClick={sign_out}
              class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100"
            >
              Log Out
            </button>
          </span>
        </div>
      </div>
      {children}
    </main>
  );
}
