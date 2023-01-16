import { Question } from "./question";
import { Quiz } from "./quiz";
import { Type } from "./type";
import { quizCreator } from "./quizCreator";


export let main = document.querySelector("main")!;
let quizStorage: Array<[Quiz]> = [];

//render quizzes
showQuizzes();


//Shows quizzes to play on main page from quizStorage + add button
function showQuizzes() {
    main.innerHTML = `<button class="rounded fade-in" id="add">+</button>`;
    document.querySelector("h1")?.addEventListener("click",showQuizzes);
    document.querySelector("#add")?.addEventListener("click", quizCreator);

}