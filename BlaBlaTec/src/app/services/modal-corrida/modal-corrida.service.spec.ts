import { TestBed } from '@angular/core/testing';

import { ModalCorridaService } from './modal-corrida.service';

describe('ModalCorridaService', () => {
  let service: ModalCorridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCorridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
