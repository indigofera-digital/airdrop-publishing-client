import { AnswerModel } from "./answer.model";
import { v4 as uuid } from 'uuid';

export class QuestionModel {
    id: string;
    text: string;
    answers: Array<AnswerModel>;
    correctAnswer: AnswerModel;

    constructor(text: string, answers: Array<AnswerModel>, correctAnswer: AnswerModel){
        this.id = uuid();
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}