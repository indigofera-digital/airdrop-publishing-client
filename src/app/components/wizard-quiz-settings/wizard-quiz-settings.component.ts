import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AnswerModel } from 'src/app/models/answer.model';
import { QuestionModel } from 'src/app/models/question.model';
import { StepsService } from 'src/app/services/steps.service';
import { StepModel } from '../../models/step.model';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
import { QuestionDialogModel } from 'src/app/models/question-dialog.model';

@Component({
  selector: 'app-wizard-quiz-settings',
  templateUrl: './wizard-quiz-settings.component.html',
  styleUrls: ['./wizard-quiz-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardQuizSettingsComponent implements OnInit {

  @Input() step: StepModel;
  @Input() quizType: string;
  @Input() questions: Array<QuestionModel>;
  

  constructor(protected stepsService: StepsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.step.isComplete = true;
    this.stepsService.data.quizType = 'Single Player';
    this.stepsService.data.questions = this.questions;
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  addQuestion(){
    let answer1 = new AnswerModel('Answer 1');
    let answer2 = new AnswerModel('Answer 2');
    let answer3 = new AnswerModel('Answer 3');
    let answer4 = new AnswerModel('Answer 4');

    let answers = [answer1, answer2, answer3, answer4];
    let question = new QuestionModel('New Question', answers, answer1);
    this.openDialog(true, question);
  }

  openDialog(createMode: boolean, question: QuestionModel){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    let dialogModel = new QuestionDialogModel();
    dialogModel.title = createMode ? 'Create Question' : 'Edit Question';
    dialogModel.question = question;
    dialogConfig.data = dialogModel;

    let dialogRef = this.dialog.open(QuestionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result && createMode)
        this.questions.push(result);
      else if(result){
        this.questions.forEach((q, i) => {
          if(q.id==result.id)
            this.questions[i] = result;
        });
      }
    });
  }

  deleteQuestion(index : number){
    this.questions.splice(index, 1);
  }

  editQuestion(question : QuestionModel){
    this.openDialog(false, question);
  }

}
