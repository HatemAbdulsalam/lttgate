/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcssessService } from './Acssess.service';

describe('Service: Acssess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcssessService]
    });
  });

  it('should ...', inject([AcssessService], (service: AcssessService) => {
    expect(service).toBeTruthy();
  }));
});
