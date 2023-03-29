import { TestBed } from '@angular/core/testing';

import { APIServiceService } from './api.service.service';

describe('APIServiceService', () => {
  let service: APIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
