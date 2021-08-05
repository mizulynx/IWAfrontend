import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistviewComponent } from './artistview.component';

describe('ArtistviewComponent', () => {
  let component: ArtistviewComponent;
  let fixture: ComponentFixture<ArtistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
