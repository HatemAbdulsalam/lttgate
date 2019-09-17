import { TestBed } from '@angular/core/testing';

import { AcssessDataService } from './acssess-data.service';

describe('AcssessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcssessDataService = TestBed.get(AcssessDataService);
    expect(service).toBeTruthy();
  });
});
