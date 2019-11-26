/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VacationService } from './Vacation.service';

describe('Service: Vacation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacationService]
    });
  });

  it('should ...', inject([VacationService], (service: VacationService) => {
    expect(service).toBeTruthy();
  }));
});
