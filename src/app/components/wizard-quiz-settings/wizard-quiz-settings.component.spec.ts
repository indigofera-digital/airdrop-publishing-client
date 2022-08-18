import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardQuizSettingsComponent } from './wizard-quiz-settings.component';

describe('WizardQuizSettingsComponent', () => {
  let component: WizardQuizSettingsComponent;
  let fixture: ComponentFixture<WizardQuizSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardQuizSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardQuizSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
