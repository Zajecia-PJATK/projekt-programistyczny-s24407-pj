"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
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
exports.Quiz = Quiz;
