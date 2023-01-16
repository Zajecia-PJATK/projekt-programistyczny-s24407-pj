export interface Settings {
  negativePoints?: boolean; //Negative points for wrong answer
  time?: number; //Time to answer for question, if 0 = false
  randomQuestions?: boolean; //Random questions
  randomAnswers?: boolean; //Random answers
  prevQuestion?: boolean; //Cannot back to previous question
}
