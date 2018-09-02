import { TestBed, inject } from '@angular/core/testing';

import { MyAdsService } from './my-ads.service';

describe('MyAdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAdsService]
    });
  });

  it('should be created', inject([MyAdsService], (service: MyAdsService) => {
    expect(service).toBeTruthy();
  }));
});
