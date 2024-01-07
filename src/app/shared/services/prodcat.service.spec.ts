import { TestBed } from '@angular/core/testing';

import { ProdcatService } from './prodcat.service';

describe('ProdcatService', () => {
  let service: ProdcatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdcatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
