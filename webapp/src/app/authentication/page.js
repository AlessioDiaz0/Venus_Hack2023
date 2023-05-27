"use client"
import { auth, provider} from "../../firebase/config.js";
import { useRouter } from 'next/navigation';
export default function Authentication() {
  const router = useRouter();
  const sign_in = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("login works.");
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log("login no work :(");
        console.log(error.message);
      });
  };
  return (
    <main class="min-h-screen bg-gradient-to-b p-4 from-purple-950 via-indigo-950 to-slate-950 flex flex-col gap-y-52 items-center">
      <div>
        <span class="font-Nunito font-extrabold text-4xl bg-gradient-to-r from-fuchsia-200 to-violet-400 bg-clip-text text-transparent flex justify-center p-10">
          VenusLingo!
        </span>
      </div>
      <div className="login" class="font-Nunito flex justify-center">
        <button
          onClick={sign_in}
          class="rounded-xl text-4xl font-bold text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 p-10 hover:from-indigo-100 hover:to-fuchsia-100"
        >
          Sign In With Google
        </button>
      </div>
    </main>
  );
}
