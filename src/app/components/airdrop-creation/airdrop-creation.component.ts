import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { StepModel } from 'src/app/models/step.model'
import { StepsService } from 'src/app/services/steps.service'

@Component({
  selector: 'app-airdrop-creation',
  templateUrl: './airdrop-creation.component.html',
  styleUrls: ['./airdrop-creation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AirdropCreationComponent implements OnInit {

  currentStep: Observable<StepModel>;

  constructor(
    protected stepsService: StepsService,
    protected router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep()
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep()
    } else {
      this.onSubmit()
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish'
  }

  onSubmit(): void {
    this.http.post<any>('https://qxomxlczzk.execute-api.eu-west-1.amazonaws.com/Prod/create-airdrop', this.stepsService.getData()).subscribe(data => {
      this.stepsService.moveToNextStep()
      this.router.navigate(['/complete'], {queryParams: {campaignUrl: data.campaignUrl}})
    })


  }

}
