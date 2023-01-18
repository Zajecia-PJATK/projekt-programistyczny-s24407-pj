import { Question } from "./question";
import { Settings } from "./settings";

export class Quiz {
    static quizArray: Quiz[] = []
  private _title: string;
  private _rank: Array<[string, number]>;
  private questionStorage: Array<Question>;
  private settings: Settings = {
    negativePoints: false,
    time: 0,
    randomQuestions: false,
    randomAnswers: false,
    prevQuestion: false,
  };

  constructor(_title: string, settings: Settings) {
    Quiz.quizArray.push(this);
    this._title = _title;
    this._rank = [];
    this.questionStorage = [];
    this.settings.negativePoints = settings.negativePoints;
    this.settings.prevQuestion = settings.prevQuestion;
    this.settings.randomAnswers = settings.randomAnswers;
    this.settings.randomQuestions = settings.randomQuestions;
    this.settings.time = settings.time;
  }

  get rank(): Array<[string, number]> {
    return this._rank;
  }

  set rank(value: Array<[string, number]>) {
    this._rank.push(...value);
    this._rank.sort();
  }

  addQuestion(question: Question) {
    this.questionStorage.push(question);
  }

  get name():string{
    return this.name;
  }
}
