import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrideComponent } from './testride.component';

describe('TestrideComponent', () => {
  let component: TestrideComponent;
  let fixture: ComponentFixture<TestrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
