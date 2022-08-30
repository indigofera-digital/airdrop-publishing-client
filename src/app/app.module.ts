import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirdropCreationComponent } from './components/airdrop-creation/airdrop-creation.component';
import { CompletePageComponent } from './components/complete-page/complete-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { WizardAirdropDetailsComponent } from './components/wizard-airdrop-details/wizard-airdrop-details.component';
import { WizardPrizeDistributionComponent } from './components/wizard-prize-distribution/wizard-prize-distribution.component';
import { WizardQuizSettingsComponent } from './components/wizard-quiz-settings/wizard-quiz-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    AirdropCreationComponent,
    CompletePageComponent,
    WizardAirdropDetailsComponent,
    WizardQuizSettingsComponent,
    WizardPrizeDistributionComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QuestionDialogComponent]

})
export class AppModule { }
