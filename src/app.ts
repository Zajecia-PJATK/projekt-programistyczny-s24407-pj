import { Question } from "./question";
import { Quiz } from "./quiz";
import { Type } from "./type";


const main = document.querySelector("main")!;
const appTitle = document.querySelector("h1")?.addEventListener("click",showQuizzes);
let quizStorage: Array<[Quiz]> = [];

//render quizzes
showQuizzes();

//Shows quizzes to play on main page from quizStorage + add button
function showQuizzes() {
    main.innerHTML = `<button class="rounded fade-in" id="add">+</button>`;
    const button = document
  .querySelector("#add")
  ?.addEventListener("click", addQuiz);
}

//Add quiz to storage trough quiz creator
function addQuiz() {
  //Enter title of quiz
  main.innerHTML = `
    <form class="fade-in">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <input type="submit">
    </form>`;

  //After submit title is equal to typed title
  const submit = document
    .querySelector("input[type='submit']")
    ?.addEventListener("click", () => {
      const title: string =
        document.querySelector<HTMLInputElement>("#title")!.value;
      quizCreator(title);
    });

  //Enter settings

  //Enter question
}

function quizCreator(title: string): Quiz {
  let quiz = new Quiz(title);

  main.innerHTML = `
    <form class="fade-in">
    <fieldset>
      <legend>Settings</legend>
      <input type="checkbox" id="option1" name="option" />
      <label for="option1">Negative points</label>
      <br />
      <input type="number" id="option2" name="option" min="0" max="600" value=0 />
      <label for="option2">Time limit in s(0=unlimited)</label>
      <br />
      <input type="checkbox" id="option3" name="option"  />
      <label for="option3">Randomise questions</label>
      <br />
      <input type="checkbox" id="option4" name="option"  />
      <label for="option4">Randomise answers</label>
      <br />
      <input type="checkbox" id="option5" name="option"  />
      <label for="option5">Disable previous questions</label>
      <input type="submit">
    </fieldset>
    </form>
    `;
    const submit = document
    .querySelector("input[type='submit']")
    ?.addEventListener("click",()=>{});

    

  return quiz;
}
