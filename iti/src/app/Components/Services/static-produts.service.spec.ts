import { TestBed } from '@angular/core/testing';

import { StaticProdutsService } from './static-produts.service';

describe('StaticProdutsService', () => {
  let service: StaticProdutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProdutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
