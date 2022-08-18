import { AfterContentInit, AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StepModel } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

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
    protected router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  onSubmit(): void {
    alert(JSON.stringify(this.stepsService.getData())) 
    this.router.navigate(['/complete']);
  }

}
