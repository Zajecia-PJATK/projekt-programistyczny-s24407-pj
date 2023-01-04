import {Type} from "./type";
export class Quizz{
    title: string;
    rank: string[];
    type: Type;
    
    constructor(title: string, type: Type){
        this.title = title;
        this.type = type
        this.rank = [];
    }
}