import { Quiz } from "./quiz";
import {Question} from "./question"
import { Type } from "./type";



const button = document.getElementById('add')?.addEventListener("click", addQuiz);
const main = document.getElementById('main')!;

function addQuiz(){
    main.innerHTML = ' ';
    //Enter title of quiz
    const quiz = new Quiz("Football");

    //Enter settings

    //Enter question
    const question = new Question('Who won World cup 2022?',Type.ONE,
    [
        ['France!',true],
        ['Argentina',false],
        ['Poland',false],
        ['Germany',false]
    ]);
    console.log(question);
}
