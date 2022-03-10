import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharzerComponent } from './charzer.component';

describe('CharzerComponent', () => {
  let component: CharzerComponent;
  let fixture: ComponentFixture<CharzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
