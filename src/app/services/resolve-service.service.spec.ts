import { TestBed } from '@angular/core/testing';

import { ResolveServiceService } from './resolve-service.service';

describe('ResolveServiceService', () => {
  let service: ResolveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
