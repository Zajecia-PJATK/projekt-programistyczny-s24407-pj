"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = require("./quiz");
const question_1 = require("./question");
const button = (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addQuiz);
const main = document.getElementById('main');
function addQuiz() {
    main.innerHTML = ' ';
    //Enter title of quiz
    const quiz = new quiz_1.Quiz("Football");
    //Enter settings
    //Enter question
    const question = new question_1.Question('Who won World cup 2022?', 1 /* Type.ONE */, [
        ['France!', true],
        ['Argentina', false],
        ['Poland', false],
        ['Germany', false]
    ]);
    console.log(question);
}
