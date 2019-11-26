/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactserviceService } from './Contactservice.service';

describe('Service: Contactservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactserviceService]
    });
  });

  it('should ...', inject([ContactserviceService], (service: ContactserviceService) => {
    expect(service).toBeTruthy();
  }));
});
