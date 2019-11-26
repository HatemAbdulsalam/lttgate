/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogDataVactionService } from './LogDataVaction.service';

describe('Service: LogDataVaction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDataVactionService]
    });
  });

  it('should ...', inject([LogDataVactionService], (service: LogDataVactionService) => {
    expect(service).toBeTruthy();
  }));
});
