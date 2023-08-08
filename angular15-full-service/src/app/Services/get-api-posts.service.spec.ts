import { TestBed } from '@angular/core/testing';

import { GetApiPostsService } from './get-api-posts.service';

describe('GetApiPostsService', () => {
  let service: GetApiPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
