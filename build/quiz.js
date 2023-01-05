"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
class Quiz {
    constructor(_title) {
        this._title = _title;
        this._rank = [];
        console.log("Hi");
    }
    get rank() {
        return this._rank;
    }
    set rank(value) {
        this._rank.push(...value);
        this._rank.sort();
    }
}
const button = (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addQuiz);
const main = document.getElementById('main');
function addQuiz() {
    main.innerHTML = ' ';
    //Enter title of quiz
    const quiz = new Quiz("Football");
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
