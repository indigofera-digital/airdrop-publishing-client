import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardAirdropDetailsComponent } from './wizard-airdrop-details.component';

describe('WizardAirdropDetailsComponent', () => {
  let component: WizardAirdropDetailsComponent;
  let fixture: ComponentFixture<WizardAirdropDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardAirdropDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardAirdropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
