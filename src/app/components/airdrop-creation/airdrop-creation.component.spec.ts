import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropCreationComponent } from './airdrop-creation.component';

describe('AirdropCreationComponent', () => {
  let component: AirdropCreationComponent;
  let fixture: ComponentFixture<AirdropCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirdropCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
