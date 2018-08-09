import { TestBed, inject } from '@angular/core/testing';

import { WarcraftLogsService } from './warcraft-logs.service';

describe('WarcraftLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarcraftLogsService]
    });
  });

  it('should be created', inject([WarcraftLogsService], (service: WarcraftLogsService) => {
    expect(service).toBeTruthy();
  }));
});
