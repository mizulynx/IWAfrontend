import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistviewListComponent } from './artistview-list.component';

describe('ArtistviewListComponent', () => {
  let component: ArtistviewListComponent;
  let fixture: ComponentFixture<ArtistviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
