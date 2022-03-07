import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEquipmentComponent } from './vequipment.component';

describe('VEquipmentComponent', () => {
  let component: VEquipmentComponent;
  let fixture: ComponentFixture<VEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
