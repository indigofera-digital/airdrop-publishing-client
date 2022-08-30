import { v4 as uuid } from 'uuid'

export class AnswerModel {
    id: string
    text: string

    constructor(text: string){
        this.id = uuid()
        this.text = text
    }
}