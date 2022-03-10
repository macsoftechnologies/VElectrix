import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestasstComponent } from './requestasst.component';

describe('RequestasstComponent', () => {
  let component: RequestasstComponent;
  let fixture: ComponentFixture<RequestasstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestasstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestasstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
