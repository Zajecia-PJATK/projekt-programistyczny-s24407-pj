"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(question, type, answers) {
        this.type = type;
        this.question = question;
        this.answers = answers;
    }
}
exports.Question = Question;
