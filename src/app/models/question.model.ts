import { AnswerModel } from "./answer.model"
import { v4 as uuid } from 'uuid'

export class QuestionModel {
    id: string
    text: string
    answers: Array<AnswerModel>
    correctAnswerId: string

    constructor(text: string, answers: Array<AnswerModel>, correctAnswerId: string){
        this.id = uuid()
        this.text = text
        this.answers = answers
        this.correctAnswerId = correctAnswerId
    }
}