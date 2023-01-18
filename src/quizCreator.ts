import { addQuestion } from "./addQuestion";
import { main } from "./app";
import { askForSettings } from "./askForSettings";
import { askForTitle } from "./askForTitle";
import { Quiz } from "./quiz";

export async function quizCreator() {
  //create new quiz
  let quiz = new Quiz(await askForTitle(), await askForSettings());
  await addQuestion(quiz);

  //create a <p> element
  let p = document.createElement("p");
  p.textContent = "Do you want to add question?";

  //create a button for ending the quiz
  let endButton = document.createElement("button");
  endButton.setAttribute("id", "end");
  endButton.textContent = "End";

  //create a button for adding one more question
  let oneMoreButton = document.createElement("button");
  oneMoreButton.setAttribute("id", "oneMore");
  oneMoreButton.textContent = "One more";

  //append the elements to main
  main.appendChild(p);
  main.appendChild(endButton);
  main.appendChild(oneMoreButton);

}
