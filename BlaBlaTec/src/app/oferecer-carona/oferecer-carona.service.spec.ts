import { TestBed } from '@angular/core/testing';

import { OferecerCaronaService } from './oferecer-carona.service';

describe('OferecerCaronaService', () => {
  let service: OferecerCaronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OferecerCaronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
