import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestationComponent } from './servicestation.component';

describe('ServicestationComponent', () => {
  let component: ServicestationComponent;
  let fixture: ComponentFixture<ServicestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
