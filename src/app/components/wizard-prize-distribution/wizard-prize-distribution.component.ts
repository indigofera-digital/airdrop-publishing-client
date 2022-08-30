import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'
import { StepsService } from 'src/app/services/steps.service'
import { StepModel } from '../../models/step.model'

@Component({
  selector: 'app-wizard-prize-distribution',
  templateUrl: './wizard-prize-distribution.component.html',
  styleUrls: ['./wizard-prize-distribution.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardPrizeDistributionComponent implements OnInit {

  @Input() step: StepModel

  constructor(protected stepsService: StepsService) { }

  ngOnInit(): void {
    this.stepsService.data.walletAddress = ""
    this.stepsService.data.token = "AVAX <token address>"
    this.stepsService.data.amount = 0
    this.stepsService.data.reward = 0
    this.step.isComplete = true
  }

}
