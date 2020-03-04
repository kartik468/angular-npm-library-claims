import { TestBed } from '@angular/core/testing';

import { CustomerClaimsService } from './customer-claims.service';

describe('CustomerClaimsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerClaimsService = TestBed.get(CustomerClaimsService);
    expect(service).toBeTruthy();
  });
});
