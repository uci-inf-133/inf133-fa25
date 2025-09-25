import { TestBed } from '@angular/core/testing';

import { TimeUtils } from './time-utils';

describe('TimeUtils', () => {
  let service: TimeUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
