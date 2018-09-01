import { TestBed, inject } from '@angular/core/testing';

import { PostAdService } from './post-ad.service';

describe('PostAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostAdService]
    });
  });

  it('should be created', inject([PostAdService], (service: PostAdService) => {
    expect(service).toBeTruthy();
  }));
});
