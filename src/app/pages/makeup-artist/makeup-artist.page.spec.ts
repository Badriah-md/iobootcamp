import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupArtistPage } from './makeup-artist.page';

describe('MakeupArtistPage', () => {
  let component: MakeupArtistPage;
  let fixture: ComponentFixture<MakeupArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
