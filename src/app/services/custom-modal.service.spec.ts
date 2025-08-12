import { TestBed } from '@angular/core/testing';

import { CustomModalService } from './custom-modal.service';

describe('CustomModService', () => {
  let service: CustomModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
