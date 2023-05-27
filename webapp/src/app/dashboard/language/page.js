import "./page.css"
export default function Authentication() {
    return(
        <main class="flex flex-row">
            <div class="flex flex-col gap-y-16 py-40 px-10">
                <button class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100">
                    <u>Flash Cards</u>
                </button>
                <button class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200  px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100">Quizzes</button>
            </div>
            <div class="flex flex-col gap-y-16 px-52">
                <h1 class="ont-Nunito font-extrabold text-4xl px-64">Language</h1>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl hover:transform-rotateY(180deg)">Word</h2>
                        </div>
                        <div class="flip-card-back">
                        <h2 class="bg-white py-64 px-80 rounded-xl text-indigo-950 text-4xl hover:transform-rotateY(180deg)">Word2</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}