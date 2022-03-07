import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEnergyComponent } from './venergy.component';

describe('VEnergyComponent', () => {
  let component: VEnergyComponent;
  let fixture: ComponentFixture<VEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEnergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
