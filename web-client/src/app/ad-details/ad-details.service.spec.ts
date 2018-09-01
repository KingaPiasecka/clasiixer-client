import { TestBed, inject } from '@angular/core/testing';

import { AdDetailsService } from './ad-details.service';

describe('AdDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdDetailsService]
    });
  });

  it('should be created', inject([AdDetailsService], (service: AdDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
