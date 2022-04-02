import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTestrideComponent } from './confirm-testride.component';

describe('ConfirmTestrideComponent', () => {
  let component: ConfirmTestrideComponent;
  let fixture: ComponentFixture<ConfirmTestrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTestrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTestrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
