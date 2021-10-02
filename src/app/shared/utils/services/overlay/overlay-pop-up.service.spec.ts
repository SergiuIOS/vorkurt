import { TestBed } from '@angular/core/testing';

import { OverlayPopUpService } from './overlay-pop-up.service';

describe('OverlayPopUpService', () => {
  let service: OverlayPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
