import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEnrouteComponent } from './venroute.component';

describe('VEnrouteComponent', () => {
  let component: VEnrouteComponent;
  let fixture: ComponentFixture<VEnrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEnrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEnrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
