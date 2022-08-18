import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardPrizeDistributionComponent } from './wizard-prize-distribution.component';


describe('WizardPrizeDistributionComponent', () => {
  let component: WizardPrizeDistributionComponent;
  let fixture: ComponentFixture<WizardPrizeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardPrizeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardPrizeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
