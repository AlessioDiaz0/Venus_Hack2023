"use client"
// import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider} from "../../firebase/config.js";
// const provider = new GoogleAuthProvider();
// const auth = getAuth;
export default function Authentication() {
    const sign_in = () => {
        auth.signInWithPopup(provider)
        .then((res) => {
            console.log("login works.");
        })
        .catch((error) =>{
            console.log("login no work :(");
            console.log(error.message);
        }) 
    };
    const sign_out = () => {
        auth.signOut()
        .then((res) => {
            console.log("log out works.");
        })
        .catch((error) =>{
            console.log("log out no work :(");
            console.log(error.message);
        }) 
    };
    return (
        <div className="AuthButtons">
            <div className="login" class="p-10">
                <button onClick={sign_in}>Sign in with google</button>
            </div>
            <div className="logOUt" class="p-10">
                    <button onClick={sign_out}>Sign out with google</button>
            </div>
        </div>
    )
}