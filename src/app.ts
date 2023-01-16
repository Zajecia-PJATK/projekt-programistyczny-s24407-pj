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
  //remove all child elements of main
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  //create a <button> element
  let button = document.createElement("button");

  //add class and id to button
  button.setAttribute("class", "rounded fade-in");
  button.setAttribute("id", "add");

  //add text to the button
  button.textContent = "+";

  //append the button to the main element
  main.appendChild(button);
  document.querySelector("h1")?.addEventListener("click", showQuizzes);
  document.querySelector("#add")?.addEventListener("click", quizCreator);
}
