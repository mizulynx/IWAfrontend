import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantZoneComponent } from './participant-zone.component';

describe('ParticipantZoneComponent', () => {
  let component: ParticipantZoneComponent;
  let fixture: ComponentFixture<ParticipantZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
