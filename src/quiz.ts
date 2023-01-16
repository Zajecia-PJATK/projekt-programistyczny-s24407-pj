import { Question } from "./question";
import { Type } from "./type";

class Quiz {   
    private _title: string;
    private _rank: Array<[string, number]>;

    constructor(_title: string) {
        this._title = _title;
        this._rank = [];
        console.log("Hi");
    }

    get rank(): Array<[string, number]> {
        return this._rank;
    }

    set rank(value: Array<[string, number]>) {
        this._rank.push(...value);
        this._rank.sort();
    }
}

const button = document.getElementById('add')?.addEventListener("click", addQuiz);
const main = document.getElementById('main')!;

function addQuiz() {
    main.innerHTML = '<div></div>';
    //Enter title of quiz
    const quiz = new Quiz("Football");

    //Enter settings

    //Enter question
    const question = new Question('Who won World cup 2022?', Type.ONE,
        [
            ['France!', true],
            ['Argentina', false],
            ['Poland', false],
            ['Germany', false]
        ]);
    console.log(question);
}