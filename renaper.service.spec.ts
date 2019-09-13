import { TestBed } from '@angular/core/testing';

import { RenaperService } from './renaper.service';

describe('RenaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenaperService = TestBed.get(RenaperService);
    expect(service).toBeTruthy();
  });
});
