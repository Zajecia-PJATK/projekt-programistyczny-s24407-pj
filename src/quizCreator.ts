import { main } from "./app";
import { Quiz } from "./quiz";
import { Settings } from "./settings";

export function QuizCreator() {
  let quiz: Quiz;
  let title: string;

  //Enter title of quiz
  main.innerHTML = `
  <form class="fade-in">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>
      <input type="submit">
  </form>`;

  //After submit title is equal to typed title
  let submit = document
    .querySelector("input[type='submit']")
    ?.addEventListener("click", () => {
      title = document.querySelector<HTMLInputElement>("#title")!.value;
    });

  //Quiz settings
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

  //set settings
  submit = document
    .querySelector("input[type='submit']")
    ?.addEventListener("click", () => {
      let quiz = new Quiz(title, {
        negativePoints: document.querySelector<HTMLInputElement>("#option1")?.checked,
        time: +(document.querySelector<HTMLInputElement>("#option1")!.value),
        randomQuestions: document.querySelector<HTMLInputElement>("#option1")?.checked,
        randomAnswers: document.querySelector<HTMLInputElement>("#option1")?.checked,
        prevQuestion: document.querySelector<HTMLInputElement>("#option1")?.checked,
      });

      //quiz.addQuestion;
    });

  //Enter settings

  //Enter question
}

function addQuestion() {}
