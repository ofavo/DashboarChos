import { TestBed } from '@angular/core/testing';

import { InitServiceService } from './init-service.service';

describe('InitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitServiceService = TestBed.get(InitServiceService);
    expect(service).toBeTruthy();
  });
});
