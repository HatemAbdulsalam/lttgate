import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPage } from './advert.page';

describe('AdvertPage', () => {
  let component: AdvertPage;
  let fixture: ComponentFixture<AdvertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
