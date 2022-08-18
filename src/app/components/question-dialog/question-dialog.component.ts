import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { QuestionDialogModel } from 'src/app/models/question-dialog.model';
import { AnswerModel } from 'src/app/models/answer.model';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent {

    form : FormGroup
    title: string = '';
  
    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) protected dialogModel:QuestionDialogModel,
                private dialogRef: MatDialogRef<QuestionDialogComponent>) {
        
        this.title = this.dialogModel.title;
        
        let fba : any = [];
        let answers = this.dialogModel.question.answers;
        
        answers.forEach(answer => {
          fba.push(this.createAnswerGroup(answer));
        });

        this.form = this.fb.group({
          id : this.dialogModel.question.id,
          text: [this.dialogModel.question.text, []],
          answers: this.fb.array(fba),
          correctAnswer: [this.dialogModel.question.correctAnswer, []]
        });
        
    }

    createAnswerGroup(answer : AnswerModel){
      return this.fb.group({
        id: new FormControl(answer.id, []),
        text: new FormControl(answer.text, []),
      });
    }

    get answers(){
      return this.form.controls["answers"] as FormArray;
    }

    close() {
        this.dialogRef.close();
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

}
