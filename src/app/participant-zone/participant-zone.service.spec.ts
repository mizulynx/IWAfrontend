import { TestBed } from '@angular/core/testing';

import { ParticipantZoneService } from './participant-zone.service';

describe('ParticipantZoneService', () => {
  let service: ParticipantZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
