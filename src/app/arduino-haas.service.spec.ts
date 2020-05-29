import { TestBed } from '@angular/core/testing';

import { ArduinoHaasService } from './arduino-haas.service';

describe('ArduinoHaasService', () => {
  let service: ArduinoHaasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArduinoHaasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
