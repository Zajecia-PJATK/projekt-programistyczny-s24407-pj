import { Type } from "./type";

export class Question {
    private type: Type;
    private question: string;
    private answers: Array<[string, boolean]>;


    constructor(question: string, type: Type, answers: Array<[string, boolean]>) {

        this.type = type;
        this.question = question;
        this.answers = answers;

    }
}