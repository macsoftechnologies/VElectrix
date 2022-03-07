import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEaseComponent } from './vease.component';

describe('VEaseComponent', () => {
  let component: VEaseComponent;
  let fixture: ComponentFixture<VEaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
