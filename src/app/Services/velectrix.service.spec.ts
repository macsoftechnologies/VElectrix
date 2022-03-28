import { TestBed } from '@angular/core/testing';

import { VElectrixService } from './velectrix.service';

describe('VElectrixService', () => {
  let service: VElectrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VElectrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
