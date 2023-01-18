import { Question } from "./question";
import { Quiz } from "./quiz";
import { showQuizzes } from "./showQuizzes";
import { Type } from "./type";

export let main = document.querySelector("main")!;

//create one test quiz
const quiz = new Quiz("Football", {
    //settings
  negativePoints: false,
  prevQuestion: false,
  randomAnswers: false,
  randomQuestions: false,
  time: 0,
});

//add question to quiz
quiz.addQuestion(new Question(
    "Who won World Cup 2022?",
    Type.ONE,
    [
        ["Poland",false],
        ["France",true],
        ["Germany",false],
        ["Qatar",false],
    ]
));
localStorage.setItem(quiz.name,JSON.stringify(quiz));

//render quizzes
showQuizzes();
