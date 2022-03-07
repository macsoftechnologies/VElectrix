import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEssentialComponent } from './vessential.component';

describe('VEssentialComponent', () => {
  let component: VEssentialComponent;
  let fixture: ComponentFixture<VEssentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEssentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
