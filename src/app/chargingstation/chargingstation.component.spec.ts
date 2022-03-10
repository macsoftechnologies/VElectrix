import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingstationComponent } from './chargingstation.component';

describe('ChargingstationComponent', () => {
  let component: ChargingstationComponent;
  let fixture: ComponentFixture<ChargingstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
