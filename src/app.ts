import { Question } from "./question";
import { Quiz } from "./quiz";
import { Type } from "./type";
import { QuizCreator } from "./quizCreator";


export const main = document.querySelector("main")!;
document.querySelector("h1")?.addEventListener("click",showQuizzes);
let quizStorage: Array<[Quiz]> = [];

//render quizzes
showQuizzes();

//Shows quizzes to play on main page from quizStorage + add button
function showQuizzes() {
    main.innerHTML = `<button class="rounded fade-in" id="add">+</button>`;
    const button = document
  .querySelector("#add")
  ?.addEventListener("click", QuizCreator);
}