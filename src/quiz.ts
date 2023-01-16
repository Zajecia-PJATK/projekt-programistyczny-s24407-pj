import { Question } from "./question";
import { Type } from "./type";

export class Quiz {
    private _title: string;
    private _rank: Array<[string, number]>;
    private questionStorage: Array<[Question]>;


    constructor(_title: string) {
        this._title = _title;
        this._rank = [];
        this.questionStorage = [];
    }

    get rank(): Array<[string, number]> {
        return this._rank;
    }

    set rank(value: Array<[string, number]>) {
        this._rank.push(...value);
        this._rank.sort();
    }

    addQuestion(type: Type) {

    }
}