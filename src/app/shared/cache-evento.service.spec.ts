import { TestBed } from '@angular/core/testing';

import { CacheEventoService } from './cache-evento.service';

describe('CacheEventoService', () => {
  let service: CacheEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
