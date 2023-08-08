import { TestBed } from '@angular/core/testing';

import { ProductsAPiService } from './products-api.service';

describe('ProductsAPiService', () => {
  let service: ProductsAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
