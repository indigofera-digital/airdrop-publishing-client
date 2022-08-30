import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { StepModel } from '../models/step.model'

const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  data: any = {};
  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS)
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null)

  constructor() {
    this.setFirstStep()
  }

  setFirstStep(){
    this.currentStep$.next(this.steps$.value[0])
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step)
  }

  getCurrentStep(): Observable<StepModel> {
    return this.currentStep$.asObservable()
  }

  getSteps(): Observable<StepModel[]> {
    return this.steps$.asObservable()
  }

  getData(): any {
    return this.data
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index])
    } else if (this.isLastStep()){
      this.setFirstStep()
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length
  }
}