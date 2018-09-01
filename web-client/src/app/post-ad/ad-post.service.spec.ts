import { TestBed, inject } from '@angular/core/testing';

import { AdPostService } from './ad-post.service';

describe('AdPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdPostService]
    });
  });

  it('should be created', inject([AdPostService], (service: AdPostService) => {
    expect(service).toBeTruthy();
  }));
});
