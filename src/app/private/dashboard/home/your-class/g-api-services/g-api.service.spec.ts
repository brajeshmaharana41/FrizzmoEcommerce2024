import { TestBed } from '@angular/core/testing';

import { GApiService } from './g-api.service';

describe('GApiService', () => {
  let service: GApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
