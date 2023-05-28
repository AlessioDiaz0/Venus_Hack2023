"use client"
import "./page.css"
import { useRouter } from 'next/navigation';

export default function flashCards() {
    const router = useRouter();
    const quiz = () => {
        router.push("/dashboard/language/quizzes");
    }
    return(
        <main class="flex flex-col">
                            <div class="flex justify-center">
                    <h1 class="font-Nunito font-extrabold text-3xl py-5">Language</h1>
                </div>
            <div class="flex flex-row">
            <div class="flex flex-col gap-y-16 py-40 px-20">
                <button class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-5 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100">
                    <u>Flash Cards</u>
                </button>
                <button class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100" onClick={quiz}>Quiz</button>
            </div>
                <div class="container px-28">
                    <div class="box">
                        <ul class = "text-4xl">
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                            <div class="py-40 text-black bg-white rounded-md px-56 flex: flex-col my-5">
                                <li>something:</li>
                                <li class="text-2xl">translation</li>
                            </div>
                        </ul>
                    </div>
                </div>
                    {/* <a href="www.something.com" class="link-item" onclick="document.querySelector('.box').scrollTop = 10000; return false;">GO TO THE LAST ITEM</a> */}
            </div>
        </main>
    )
}