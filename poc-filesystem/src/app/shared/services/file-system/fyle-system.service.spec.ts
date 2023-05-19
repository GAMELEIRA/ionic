import { TestBed } from '@angular/core/testing';

import { FyleSystemService } from './fyle-system.service';

describe('FyleSystemService', () => {
  let service: FyleSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FyleSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
