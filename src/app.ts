import { Question } from "./question";
import { Quiz } from "./quiz";
import { Type } from "./type";

const button = document.getElementById('add')?.addEventListener("click", addQuiz);
const main = document.getElementById('main')!;

let quizStorage: Array<[Quiz]> = [];

//render quizzes
showQuizzes();

//Shows quizzes to play on main page
function showQuizzes() {
    //TBD
}

//Add quiz to storage trough quiz creator
function addQuiz() {

    //Enter title of quiz
    main.innerHTML = `
    <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <input type="submit">
    </form>`;

    //After submit title is equal to typed title 
    const submit = document.querySelector("input[type='submit']")?.addEventListener("click", () => {
        const title: string = document.querySelector<HTMLInputElement>('#title')!.value;
        new Quiz(title);
    });



    //Enter settings

    //Enter question

}

function quizCreator() {

}