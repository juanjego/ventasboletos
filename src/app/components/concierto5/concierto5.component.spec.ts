import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concierto5Component } from './concierto5.component';

describe('Concierto5Component', () => {
  let component: Concierto5Component;
  let fixture: ComponentFixture<Concierto5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concierto5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concierto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
