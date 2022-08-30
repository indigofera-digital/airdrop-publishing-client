import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'
import { StepsService } from 'src/app/services/steps.service'
import { StepModel } from '../../models/step.model'

@Component({
  selector: 'app-wizard-airdrop-details',
  templateUrl: './wizard-airdrop-details.component.html',
  styleUrls: ['./wizard-airdrop-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardAirdropDetailsComponent implements OnInit {

  @Input() step: StepModel

  constructor(protected stepsService: StepsService) { 
    
  }

  ngOnInit(): void {
    this.stepsService.data.name = ""
    this.stepsService.data.type = "Quiz"
    this.stepsService.data.chain = "Avalanche"
    this.step.isComplete = true
  }

}
