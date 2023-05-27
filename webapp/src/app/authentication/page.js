"use client"
import { auth, provider} from "../../firebase/config.js";
import { useRouter } from 'next/navigation';
export default function Authentication() {
    const router = useRouter();
    const sign_in = () => {
        auth.signInWithPopup(provider)
        .then((res) => {
            console.log("login works.");
            router.push('/dashboard')
        })
        .catch((error) =>{
            console.log("login no work :(");
            console.log(error.message);
        }) 
    };
    // const sign_out = () => {
    //     auth.signOut()
    //     .then((res) => {
    //         console.log("log out works.");
    //     })
    //     .catch((error) =>{
    //         console.log("log out no work :(");
    //         console.log(error.message)
    //         router.push('/authentication')
    //     }) 
    // };
    return (
        <main class="min-h-screen bg-gradient-to-b p-4 from-purple-950 via-indigo-950 to-slate-950 flex flex-col gap-y-52">
            <div>
                <span class="font-Nunito font-extrabold text-4xl bg-gradient-to-r from-fuchsia-200 to-violet-400 bg-clip-text text-transparent flex justify-center p-10">
                VenusLingo!
                </span>
            </div>
            <div className="login" class="font-Nunito text-4xl flex justify-center">
                <button onClick={sign_in} class="rounded-xl text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 p-10 hover:from-indigo-100 hover:to-fuchsia-100">Sign In With Google</button>
            </div>
                {/* <div className="logOut" class="p-10">
                        <button onClick={sign_out}>Sign out with google</button>
                </div> */}
        </main>
    )
}