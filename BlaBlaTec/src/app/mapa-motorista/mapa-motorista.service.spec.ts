import { TestBed } from '@angular/core/testing';

import { MapaMotoristaService } from './mapa-motorista.service';

describe('MapaMotoristaService', () => {
  let service: MapaMotoristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaMotoristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
