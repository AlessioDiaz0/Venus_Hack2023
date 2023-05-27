import "./page.css"
export default function Authentication() {
    return(
        <main class="flex flex-row">
            <div class="flex flex-col gap-y-16 py-40 px-10">
                <button>Flash Cards</button>
                <button>Quizzes</button>
            </div>
            <div class="flex flex-col gap-y-16 px-52">
                <h1 class="ont-Nunito font-extrabold text-4xl px-72">Language</h1>
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