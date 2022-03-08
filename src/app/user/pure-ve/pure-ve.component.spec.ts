import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureVEComponent } from './pure-ve.component';

describe('PureVEComponent', () => {
  let component: PureVEComponent;
  let fixture: ComponentFixture<PureVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureVEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
