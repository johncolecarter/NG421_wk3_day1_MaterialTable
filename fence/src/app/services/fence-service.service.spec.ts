import { TestBed } from '@angular/core/testing';

import { FenceServiceService } from './fence-service.service';

describe('FenceServiceService', () => {
  let service: FenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
