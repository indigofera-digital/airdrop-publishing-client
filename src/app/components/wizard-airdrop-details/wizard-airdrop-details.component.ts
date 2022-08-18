import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';
import { StepModel } from '../../models/step.model';

@Component({
  selector: 'app-wizard-airdrop-details',
  templateUrl: './wizard-airdrop-details.component.html',
  styleUrls: ['./wizard-airdrop-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardAirdropDetailsComponent implements OnInit {

  @Input() step: StepModel;

  constructor(protected stepsService: StepsService) { 
    
  }

  ngOnInit(): void {
    this.stepsService.data.airdropName = "";
    this.stepsService.data.airdropType = "Quiz";
    this.stepsService.data.chain = "Avalanche Fuji Testnet";
    this.step.isComplete = true;
  }

}
