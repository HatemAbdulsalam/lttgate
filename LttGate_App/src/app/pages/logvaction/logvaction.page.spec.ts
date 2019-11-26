import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogvactionPage } from './logvaction.page';

describe('LogvactionPage', () => {
  let component: LogvactionPage;
  let fixture: ComponentFixture<LogvactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogvactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogvactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
